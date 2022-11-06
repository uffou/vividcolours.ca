import React from 'react'
import AvocadoBox from '../Avocado/AvocadoBox'
import useIntersectionObserverRef from '../../utils/useIntersectionObserverRef'
import { useEstimateFormContext } from '../EstimateForm/EstimateFormContext'
import { Links } from '../Location'
import { PageHead } from 'components/PageHead'
import Image from 'next/image'

import AgendaIcon from '../../public/agenda.svg'
import PhoneIcon from '../../public/phone.svg'
import EmailIcon from '../../public/email.svg'
import InstagramIcon from '../../public/insta.svg'
import FacebookIcon from '../../public/fb.svg'
import PinterestIcon from '../../public/pinterest.svg'


const colors = {
	h1: '#000000',
	bg: '#ffffff',
	accent: '#ff6977',
}

const metaTitle = 'Contact - Vivid Colours Painting'


export default function ContactUs({ intersectionObserver, elements, id }) {
	const ref = intersectionObserver && useIntersectionObserverRef(intersectionObserver, elements, id)
	const { show } = useEstimateFormContext()
	return <AvocadoBox id="contact" style={{ backgroundColor: colors.bg, color: colors.h1 }} className="h" innerClass="ContactUs" containerRef={ref}>
		{!intersectionObserver && <div style={{ height: 60 }} />}
		{!intersectionObserver && <PageHead title={metaTitle} />}
		<Image src="/team.svg" width={865} height={386} />
		<h1 style={{ color: colors.h1 }}>Contact Us</h1>
		<h2 style={{ color: colors.h1 }}>Kitchener Waterloo Painters</h2>
		<p className="description">
			Professional Painters in Kitchener / Waterloo
		</p>
		<div className="box-items">
			<div className="box">
				<div className="title">
					Free Quotes
				</div>
				<div className="description">
					You can schedule a<br />
					free estimate online
				</div>
				<div className="h mt2 mb2">
					<div style={{ backgroundColor: colors.accent }} className="big blue round btn" onClick={() => show('Team')}>
						<AgendaIcon className="v mr" />
						Book a free estimate
					</div>
				</div>
			</div>
			<div className="box">
				<div className="title">
					Phone
				</div>
				<div className="description">
					Contact us by phone<br />
					at <a href="tel:226-338-8495">226-338-8495</a>
				</div>
				<a href="tel:226-338-8495"><PhoneIcon className="mt2 v" /></a>
			</div>
			<div className="box">
				<div className="title">
					Email
				</div>
				<div className="description">
					Contact us by email at<br />
					<a href="mailto:office@vividcolours.ca">office@vividcolours.ca</a>
				</div>
				<a href="mailto:office@vividcolours.ca"><EmailIcon className="mt2 v" /></a>
			</div>
		</div>

		<Links />
		<h2 style={{ color: colors.h1 }}>
			Join us now:
		</h2>
		<div className="v">
			<a rel="noopener noreferrer" target="_blank" href="https://www.pinterest.ca/vividcolourspainting/">
				<PinterestIcon className="ml v mr hand" />
			</a>
			<a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/vividcolourspainting">
				<FacebookIcon className="ml v mr hand"  />
			</a>
			<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/vividcolourspainting/">
				<InstagramIcon className="ml v mr hand" />
			</a>

		</div>
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<p>
				Monday 8a.m.-7p.m.
			</p>
			<p>
				Tuesday 8a.m.-7p.m.
			</p>
			<p>
				Wednesday 8a.m.-7p.m.
			</p>
			<p>
				Thursday 8a.m.-7p.m.
			</p>
			<p>
				Friday 8a.m.-7p.m.
			</p>
			<p>
				Saturday 8a.m.-2p.m.
			</p>
			<p>
				Sunday Closed
			</p>
		</div>


	</AvocadoBox>
}
