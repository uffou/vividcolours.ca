import React from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import useIntersectionObserverRef from '../../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import SocialProof from './SocialProof/SocialProof'
import { PageHead } from 'components/PageHead'
import Image from 'next/image'

import AgendaIcon from '../../public/agenda.svg'
import Reviews from './SocialProof/Reviews/Reviews'

const colors = {
	h1: '#010101',
	h2: '#010101',
	bg: 'linear-gradient(170deg, #E3B5FE, #FFFFFF)',
	green: '#00a551',
}

const metaTitle = 'Why Us - Vivid Colours Painting'

export default function WhyUs({ intersectionObserver, elements, id, location }) {
	const ref = intersectionObserver ? useIntersectionObserverRef(intersectionObserver, elements, id) : void 0
	const { show } = useEstimateFormContext()
	return <AvocadoBox id="why" style={{ background: colors.bg, color: colors.h1 }} class="h" innerClass="WhyUs" containerRef={ref}>
		{!intersectionObserver && <div style={{ height: 60 }} />}
		{!intersectionObserver && <PageHead title={metaTitle} />}
		<div className='centered center-it'>
			<h1 style={{ color: colors.h1 }}>Why choose Vivid?</h1>
			<h2 style={{ color: colors.h2}}>
				We give life to the old colours and transform your <br/>space into the office or home of your dreams.
			</h2>
		</div>
		<Reviews />
	</AvocadoBox>
}
