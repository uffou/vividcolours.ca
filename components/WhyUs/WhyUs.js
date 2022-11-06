import React from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import useIntersectionObserverRef from '../../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import SocialProof from './SocialProof/SocialProof'
import { PageHead } from 'components/PageHead'
import Image from 'next/image'

import AgendaIcon from '../../public/agenda.svg'

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
		{!intersectionObserver && <PageHead title={metaTitle} />}
		<h1 style={{ color: colors.h1 }}>Why choose Vivid Colours?</h1>
		<div className="description">
			We give life to the old colours and transform your space into the office or home of your dreams.
		</div>
		<Image src="/why.svg" width={745} height={454} />
		<div className="h mt2 mb2">
			<div style={{ backgroundColor: colors.green }} className="big blue round btn" onClick={() => show(location ? 'LocationWhyUs' : 'WhyUs')}>
				<AgendaIcon class="v mr" />
				Book a free estimate today!
			</div>
		</div>
	</AvocadoBox>

	return <>
		{why}
		<SocialProof />
	</>
}
