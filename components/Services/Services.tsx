/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-handler-names */
import React, { useState, useRef } from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import AvocadoTabs from '../Avocado/AvocadoTabs'

import useIntersectionObserverRef from '../../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import { PageHead } from 'components/PageHead'

import AgendaIcon from '../../public/agenda.svg'
import GalleryIcon from '../../public/gallery-icon.svg'
import InteriorIcon from '../../public/interior.svg'
import ExteriorIcon from '../../public/exterior.svg'
import CommercialIcon from '../../public/commercial.svg'
import ColorIcon from '../../public/color.svg'
import CabinetIcon from '../../public/cabinet.svg'
import { cs } from 'react-notion-x'
// const elementResizeDetectorMaker = require('element-resize-detector')

const colors = {
	h1: '#010101',
	h2: '#C4C4C4',
	bg: '#ffffff',
}

const services = {
	interior: { id: 'interior',
		title: 'Interior Painting',
		image: <img className="mb2 rounded cover" src="/interior-painting.jpg" />,
		description: `Walls and ceilings
		Doors and Windows
		Railings
		Cabinet painting and refinishing
		you name it`,
		style:{color: '#010101'},
		Icon: InteriorIcon },

	exterior: { id: 'exterior',
		title: 'Exterior Painting',
		image: <img className="mb2 rounded cover short" src="/exterior-painting.jpg" />,
		description: `Siding (wood, vinyl, composite and aluminium)
		Fascia and Eavestrough
		Stucco
		Doors, Windows, Shutters
		Decks, Patios, Pergolas and Railings
		Fence painting`,
		style:{
			backgroundImage:'url("/painter.jpg")',
			color: '#00A551'
		},
		Icon: ExteriorIcon },
		cabinet: { id: 'cabinet',
		title: 'Cabinet Painting',
		image: <img className="mb2 rounded cover short" src="/cabinet-painting.jpg" />,
		description: `Kitchen Cabinet Painting or Refinishing
		Other cabinets, cupboards, bookcases and furniture`,
		style:{
			backgroundImage:'url("/cabinets-bg.jpg")',
			color: '#294069'
		},
		Icon: CabinetIcon },
	commercial: { id: 'commercial',
		title: 'Commercial Painting',
		image: <img className="mb2 rounded cover" src="/commercial-painting.jpg" />,
		description: `Vivid Colours offers full-service, professional commercial painting in Kitchener, Waterloo, Guelph, Cambridge and surrounding area.

Part of our services include:
- Condominiums
- Apartment buildings
- Offices
- Stores
- Showrooms
and more`,
		style:{
			backgroundImage:'url("/comercial-bg.jpg")',
			color: '#231F20',
		},
		Icon: CommercialIcon },
		color: { id: 'color',
		title: 'Colour Consultation',
		image: <img className="fullwidth cover" src="/dobrina.jpg" />,
		description: 'Choosing the perfect colour can be a stressful. Let our designer help you.',
		style:{
			background: 'linear-gradient(45deg,#844BF5,#EFC2FF)',
			color: '#FFFFFF',
		},
		Icon: ColorIcon },
}

const metaTitle = 'Services - Vivid Colours Painting'

export default function Services({ intersectionObserver, elements, id }) {
	const { show } = useEstimateFormContext()
	const ref = intersectionObserver && useIntersectionObserverRef(intersectionObserver, elements, id)
	


	return <div ref={ref} id="services">
		{!intersectionObserver && <div style={{ height: 60 }} />}
		{!intersectionObserver && <PageHead title={metaTitle} />}
		<AvocadoBox style={{ backgroundColor: colors.bg }} className="h Services" innerClass="">
			<h1 style={{ color: colors.h1 }}>What we do</h1>
			<h2 style={{ width: 434, color: colors.h2 }}>Mostly we make you happy. Here are our services.</h2>

			<div className="grid-container-8">
				{Object.values(services).map((service,index) => {
					const {Icon} = service
					return <div key={service.id} className={cs('relative','grid-item', 'grid-item-'+(index+1))}>
						<div style={service.style} className="br12 overflow-hidden">
						{service.id === 'color' && service.image}
						<div className="p4">
							<div className='t'>
								{index > 1 && <Icon />}
								<h2 style={{color: service.style.color}}>{service.title}</h2>
							</div>
							<p style={index === 4 || index === 2 ? {color: service.style.color} : null}className='description'>{service.description}</p>
							{index < 2 && <Icon />}
							<div className="btn black small">Learn more</div>
						</div>
					</div>
					</div>
				})}
			</div>

			<div className="v mt2">
				<div className="grow"></div>
				<div className="orange btn mr" onClick={() => show('Services')}>
					<AgendaIcon className="v mr" />
					Book a free estimate today!</div>

				<a href="#gallery">
					<div className="v black btn">
						<GalleryIcon className="mr" style={{ width: '22px', height: '22px' }}  />
						<span>Gallery</span>
					</div>
				</a>
				<div className="grow"></div>
			</div>
		</AvocadoBox>
	</div>
}
