/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-handler-names */
import React from 'react'
import AvocadoBox from '../../Avocado/AvocadoBox'
import SVG from '../../utils/SVG'
import Reviews from './Reviews/Reviews'
import { useEstimateFormContext } from '../../EstimateForm/EstimateFormContext'

const colors = {
	h2: '#FFFFFF',
	bg: '#2e3191',
}

export default function SocialProof() {
	const { show } = useEstimateFormContext()

	return <AvocadoBox id="testimonials" style={{ backgroundColor: colors.bg }} class="h v SocialProof" innerClass="">
		<h2 style={{ color: colors.h2 }}>What our customers are saying</h2>
		<Reviews />
		<h2 style={{ color: colors.h2 }}>Join our happy customers</h2>
		<div class="v center-it mt2" onClick={() => show('Reviews')}>
			<div style={{ color: colors.bg }} class="big white round btn"><SVG class="v mr" src={require('../../Home/agenda.svg')} />
				Book a free estimate today!
			</div>
			<div class="grow" />
		</div>
	</AvocadoBox>
}

