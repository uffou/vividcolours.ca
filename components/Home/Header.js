/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-handler-names */

import React from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import useIntersectionObserverRef from '../../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import Image from 'next/image'
import AgendaIcon from '../../public/agenda.svg'

const colors = {
	h1: '#FF5D00',
	h2: '#010101',
	bg: '#fff',
	tertiary: '#969eb0',
}

export default function Header({ intersectionObserver, elements, id }) {
	const ref = useIntersectionObserverRef(intersectionObserver, elements, id)
	const { show } = useEstimateFormContext()
	return <header ref={ref}>
		<div id="home" className="header-content">
			<AvocadoBox style={{ backgroundColor: colors.bg }} className="h" innerClassName="v smallScreenPadded">
				<div className="left">
					<h1 style={{ color: colors.h1 }}>Just quality<br />painting.</h1>
					<div className="header-form">
						<h2 style={{ width: 434, color: colors.h2 }}>We paint everything from residential to commercial, interior and exterior.</h2>
						<div style={{ width: 380, color: colors.tertiary }}>
						Professional Painters in Kitchener, Waterloo 
						Cambridge, Guelph and nearby area.
						</div>
						<div className="v mt2 mb2" onClick={() => show('Header')}>
							<div className="orange btn"><AgendaIcon className="v mr" />
								Book a free estimate today!</div>
							<a className="ml2" href="tel:226-338-8495">Call us 226-338-8495</a>
						</div>
					</div>
				</div>
				<Image src="/house.svg" width={836} height={627} />
				{/* <MouseScrollAnimation text="This is BIG, are you ready?" /> */}
			</AvocadoBox>
			<Image style={{position:'absolute', bottom: -50, left: 100}} src="/rectangle1.svg" width={577/1.5} height={554/1.5} />
		</div>
	</header>
}
