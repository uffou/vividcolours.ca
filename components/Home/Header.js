/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-handler-names */

import React from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import { ResponsiveIMG } from '../utils/ResponsiveImage'
import SVG from '../utils/SVG'
import useIntersectionObserverRef from '../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'

const colors = {
	h1: '#2E3191',
	h2: '#26A9E0',
	bg: '#fff',
	tertiary: '#969eb0',
}

export default function Header({ intersectionObserver, elements, id }) {
	const ref = useIntersectionObserverRef(intersectionObserver, elements, id)
	const { show } = useEstimateFormContext()
	return <header ref={ref}>
		<div id="home" className="header-content">
			<AvocadoBox style={{ backgroundColor: colors.bg }} className="h" innerclassName="v smallScreenPadded">
				<div className="left">
					<h1 style={{ color: colors.h1 }}>Quality<br />Painting<br />Services.</h1>
					<div className="header-form">
						<h2 style={{ color: colors.h2 }}>Everything from residential to commercial, interior and exterior painting and colour consultation.</h2>
						<div className="v mt2 mb2" onClick={() => show('Header')}>
							<div className="big green round btn"><SVG className="v mr" src={require('./agenda.svg')} />
								Book a free estimate today!</div>
							<div className="grow" />
						</div>
						<div style={{ width: 260, color: colors.tertiary }}>
							You can schedule a free estimate online or call us today at: 226-338-8495
						</div>
					</div>
				</div>
				<ResponsiveIMG src={require('./house.png')} width={905} height={568} />
				{/* <MouseScrollAnimation text="This is BIG, are you ready?" /> */}
			</AvocadoBox>
		</div>
	</header>
}
