/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-handler-names */
import React, { useState, useEffect, useMemo, useRef } from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import SVG from '../utils/SVG'
import AvocadoTabs from '../Avocado/AvocadoTabs'
import { debounce } from 'lodash-es'
import useIntersectionObserverRef from '../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import { Helmet } from 'react-helmet'
const elementResizeDetectorMaker = require('element-resize-detector')

const colors = {
	h1: '#00a551',
	bg: '#c5ea8a',
}

const options = {
	interior: { id: 'interior',
		title: 'Interior Painting',
		image: <img class="mb2 rounded cover" src={require('./img/interior-painting.jpg')} />,
		description: `Part of our interior services include painting your:
		Walls and ceilings
		Doors and Windows
		Railings
		Cabinet painting and refinishing

		In addition to painting your walls, doors and windows we can also help with:
		- Covering your floors and furniture
		- Small drywall repair, removing nail holes or cracks in the walls
		- Wallpaper removal
		- Caulking windows

		Adjusting to your schedule is never a challenge for us!
		Friendly and reliable! We are Vivid Colours!`,
		svg: require('./img/interior.svg') },

	exterior: { id: 'exterior',
		title: 'Exterior Painting',
		image: <img class="mb2 rounded cover short" src={require('./img/exterior-painting.jpg')} />,
		description: `Part of our exterior services include painting your:
		Siding (wood, vinyl, composite and aluminium)
		Fascia and Eavestrough
		Stucco
		Doors, Windows, Shutters
		Decks, Patios, Pergolas and Railings
		Fence painting
		
		We can also help you with:
		- Covering plants
		- Filling small holes or cracks in the walls
		- Power washing and sanding surfaces
		- Caulking windows and doors	

		Adjusting to your schedule is never a challenge for us!
		Friendly and reliable! We are Vivid Colours!`,
		svg: require('./img/exterior.svg') },
	commercial: { id: 'commercial',
		title: 'Commercial Painting',
		image: <img class="mb2 rounded cover" src={require('./img/commercial-painting.jpg')} />,
		description: `Vivid Colours offers full-service, professional commercial painting in Kitchener, Waterloo, Guelph, Cambridge and surrounding area.
You can count on a professional execution in a timely manner without disruption of your business.

Part of our services include:
- Condominiums
- Apartment buildings
- Offices
- Stores
- Showrooms
and more	

		Adjusting to your schedule is never a challenge for us!
		Friendly and reliable! We are Vivid Colours!`,
		svg: require('./img/commercial.svg') },
	cabinet: { id: 'cabinet',
		title: 'Cabinet Painting',
		image: <img class="mb2 rounded cover short" src={require('./img/cabinet-painting.jpg')} />,
		description: `Part of our cabinets painting and refinishing services include:
		- Kitchen Cabinet Painting or Refinishing
- Other cabinets, cupboards, bookcases and furniture

We offer different methods to meet your needs:
- Spray painting – Cabinet doors are carefully removed and sprayed offsite. Cabinet boxes are brushed on-site using the same product. Finish looks great, it is smooth and durable.
- Brush and roll painting – Cabinet doors are carefully removed and taken offsite. Paint is brushed and rolled onto the cabinet doors. Finish looks great, it is still durable while the cost is reduced.
When cabinets are all painted and dry they are reinstalled in your home. Your kitchen receives full makeover without the stress, length and cost of installing new cabinets.

Adjusting to your schedule is never a challenge for us!
Friendly and reliable! We are Vivid Colours!
		`,
		svg: require('./img/cabinet-painting.svg') },
	color: { id: 'color',
		title: 'Colour Consultation',
		image: <img class="mb2 rounded cover" src={require('./img/colour-consultation.jpg')} />,
		description: 'We know that choosing the perfect colour can be a stressful and time consuming experience.  Let our experts help you when you book your free estimate with us.',
		svg: require('./img/color.svg') },
}

const metaTitle = 'Services - Vivid Colours Painting'

export default function Services({ intersectionObserver, elements, id }) {
	const { show } = useEstimateFormContext()
	const ref = intersectionObserver ? useIntersectionObserverRef(intersectionObserver, elements, id) : useRef()
	const [selected, setSelected] = useState('interior')

	const [width, setWidth] = useState()

	const setSize = useMemo(() => debounce((element) => {
		setWidth(element.offsetWidth)
	}, 50), [setWidth])

	useEffect(() => {
		const { current } = ref
		const erd = elementResizeDetectorMaker()
		erd.listenTo(current, setSize)

		return () => {
			erd.removeListener(current, setSize)
		}
	}, [setSize])

	const descriptions = []
	for (const i in options) {
		descriptions.push(<div key={i} class={`description ${selected === i ? '' : 'hidden'}`}>
			{options[i].image ? options[i].image : null}
			<div>
				{options[i].description}
			</div>
			<div class="v mt2">
				<div class="big green round btn" onClick={() => show('Services')}><SVG class="v mr" src={require('../Home/agenda.svg')} />
					Book a free estimate today!</div>
				<div class="grow" />

				{i === 'interior' && <a href="#gallery">
					<div class="v big green-transparent round btn" style={{ height: '50px' }}>
						<SVG class="mr" style={{ width: '22px', height: '22px' }} src={require('../Home/noun_gallery_image.svg')} />
						<span>Gallery</span>
					</div>
				</a>}
				{i === 'exterior' && <a href="#exterior-gallery">
					<div class="v big green-transparent round btn" style={{ height: '50px' }}>
						<SVG class="mr" style={{ width: '22px', height: '22px' }} src={require('../Home/noun_gallery_image.svg')} />
						<span>Gallery</span>
					</div>
				</a>}


			</div>
		</div>)
	}

	return <div ref={ref} id="services">
		{!intersectionObserver && <div style={{ height: 60 }} />}
		{!intersectionObserver && <Helmet>
			<title>{metaTitle}</title>
			<meta name="twitter:title" content={metaTitle} />
			<meta property="og:title" content={metaTitle} />
		</Helmet>}
		<AvocadoBox style={{ backgroundColor: colors.bg }} class="h Services" innerClass="">
			<h1 style={{ color: colors.h1 }}>What we do</h1>
			<AvocadoTabs
				horizontal={width > 900}
				class="big"
				options={options}
				selectedKey={selected}
				selectedColor={colors.h1}
				color="#231F20"
				selectedBg="#FFFFFF"
				onSelect={setSelected}
			/>

			{descriptions}
		</AvocadoBox>
	</div>
}
