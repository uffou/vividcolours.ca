import React from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import SVG from '../utils/SVG'
import useIntersectionObserverRef from '../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import { ResponsiveSVG } from '../utils/ResponsiveImage'
import { Helmet } from 'react-helmet'
import SocialProof from './SocialProof/SocialProof'

const colors = {
	h1: '#2e3191',
	bg: '#FFFFFF',
	green: '#00a551',
}

const metaTitle = 'Why Us - Vivid Colours Painting'

export default function WhyUs({ intersectionObserver, elements, id, location }) {
	const ref = intersectionObserver ? useIntersectionObserverRef(intersectionObserver, elements, id) : void 0
	const { show } = useEstimateFormContext()
	const why = <AvocadoBox id="why" style={{ backgroundColor: colors.bg, color: colors.h1 }} class="h" innerClass="WhyUs" containerRef={ref}>
		{!intersectionObserver && <div style={{ height: 60 }} />}
		{!intersectionObserver && <Helmet>
			<title>{metaTitle}</title>
			<meta name="twitter:title" content={metaTitle} />
			<meta property="og:title" content={metaTitle} />
		</Helmet>}
		<h1 style={{ color: colors.h1 }}>Why choose Vivid Colours?</h1>
		<div class="description">
			We give life to the old colours and transform your space into the office or home of your dreams.
		</div>
		<ResponsiveSVG src={require('../img/why.svg')} width={745} height={454} />
		<div class="h mt2 mb2">
			<div style={{ backgroundColor: colors.green }} class="big blue round btn" onClick={() => show(location ? 'LocationWhyUs' : 'WhyUs')}>
				<SVG class="v mr" src={require('../Home/agenda.svg')} />
				Book a free estimate today!
			</div>
		</div>
	</AvocadoBox>

	return <>
		{why}
		<SocialProof />
	</>
}
