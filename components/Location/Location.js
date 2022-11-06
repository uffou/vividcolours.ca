import React from 'react'
import WhyUs from '../WhyUs/WhyUs'
import AgendaIcon from '../../public/agenda.svg'
import { Links } from './Links'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import { PageHead } from 'components/PageHead'
import Image from 'next/image'

export default function Location({ location }) {
	const { show } = useEstimateFormContext()
	const metaTitle = `Professional Painters in ${location.name}, ${location.state} - Vivid Colours Painting`
	const metaDescription = `House Painting and Commercial painting services in ${location.name}, ${location.state}. Exterior and Interior Painters in ${location.name}, ${location.state}.`
	return <>
		<PageHead title={metaTitle} description={metaDescription}/>
		<Image src="/team.svg" width={865} height={386} className="area-page-illustration" />

		<h1 className="area-page-title">Professional Painters<br /> in <span className="dont-break">{location.name}, {location.state}</span></h1>

		<h3 className="area-page-small-title">House Painting and Commercial painting services in <span className="dont-break">{location.name}, {location.state}</span></h3>
		<div className="h mt2 mb2">
			<div style={{ backgroundColor: '#2E3191' }} className="big blue round btn" onClick={() => show('Location')}>
				<AgendaIcon className="v mr" />
				Book a free estimate today!
			</div>
		</div>
		<h3 className="area-page-small-title">Exterior and Interior Painters in <span className="dont-break">{location.name}, {location.state}</span></h3>
		<p className="area-page-paragraph mt3">Vivid Colours is a guild of painters and people of art and vision. We give life to the old colours and transform your space into the office or home of your dreams.</p>
		<p className="area-page-paragraph">We turn old into new and dull into modern. Whether it is residential or commercial, kids’ room or living room, the brick or siding of your house, that hard to reach spot by the stairs or that new home you just moved in – Vivid Colours has you covered!</p>
		<WhyUs location />
		<center className="ml2 mr2">
			<Links />
		</center>
		<div className="mt10 ml2 mr2" />
	</>
}
