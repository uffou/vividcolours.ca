import * as React from 'react'
import { domain } from 'lib/config'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import { NotionPage } from 'components'
import { NotionPageHeader } from 'components/NotionPageHeader'
import Home from 'components/Home/Home'
import { useEstimateFormContext } from 'components/EstimateForm/EstimateFormContext'
import EstimateForm from '../components/EstimateForm/EstimateForm'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  console.log('@@',props)
  const { isShown } = useEstimateFormContext()

  const [currentSection, setCurrentSection] = React.useState(0)
	const elements = React.useMemo(() => new Map(), [])
	const observer = React.useRef<IntersectionObserver>(null)
	React.useEffect(() => {
			const lastRatio = {}
			const intersectionObserver = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						const id = elements.get(entry.target)
						lastRatio[id] = entry.intersectionRatio
					}

					const [[mostIntersecting]] = Object.entries(lastRatio).sort((a, b) => b[1] - a[1])
					if (lastRatio[mostIntersecting] > 0.2) {
						setCurrentSection(parseInt(mostIntersecting, 10))
					}
				},
				{ threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] },
			)
			observer.current = intersectionObserver
		},
		[setCurrentSection, elements],
	)

	React.useEffect(() => () => {
			observer.current.disconnect()
	}, [observer.current])

  return <>
    <NotionPageHeader currentSection={currentSection}/>
    <Home intersectionObserver={observer.current} elements={elements} />
    <NotionPage {...props} />
    {isShown ? <EstimateForm /> : null}
  </>
}
