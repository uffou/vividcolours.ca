import React from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import AgendaIcon from '../../public/agenda.svg'
import useIntersectionObserverRef from '../../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import { PageHead } from 'components/PageHead'

const colors = {
	h1: '#2E3191',
	bg: '#E7DFFD',
}

const description = `
Vivid Colours is a Kitchener based painting company. It is a guild of painters and people of art and vision. We give life to the old colours and transform your space into the office or home of your dreams.

Our vast expertise in painting is what sets us aside from the rest.

We turn old into new and dull into modern. Whether it is residential or commercial, kids’ room or living room, the brick or siding of your house, that hard to reach spot by the stairs or that new home you just moved in – Vivid Colours has you covered!

Adjusting to your schedule is never a challenge for us!

Friendly and reliable! We are Vivid Colours! `

const metaTitle = 'About - Vivid Colours Painting'

export default function About({ intersectionObserver, elements, id }) {
	const ref = intersectionObserver && useIntersectionObserverRef(intersectionObserver, elements, id)
	const { show } = useEstimateFormContext()
	return <AvocadoBox id="about" style={{ backgroundColor: colors.bg, color: colors.h1 }} className="h" innerclassName="About smallScreenPadded" containerRef={ref}>
		{!intersectionObserver && <div style={{ height: 60 }} />}
		{!intersectionObserver && <PageHead title={metaTitle} />}
		<h1 style={{ color: colors.h1 }}>About</h1>
		<div className="t">
			<div className="description">
				{description}
				<div className="v mt2">
					<div className="big blue round btn" onClick={() => show('About')}>
						<AgendaIcon className="v mr" />
						Book a free estimate today!
					</div>
					<div className="grow" />
				</div>
			</div>
			<video autoPlay muted playsInline loop controls className="bigShadow" width="320" height="568">
				<source src={'/video.mp4'} type="video/mp4" />
			</video>
		</div>
	</AvocadoBox>
}
