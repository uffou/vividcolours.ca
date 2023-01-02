/* eslint-disable react/jsx-handler-names */

import React, { lazy } from 'react'
import Header from './Header'
import Services from '../Services'
import WhyUs from '../WhyUs/WhyUs'
// import { VividGalleryExterior } from '../Gallery/VividGallery'

const MessengerCustomerChat = lazy(() => import('react-messenger-customer-chat'))

// const VividGallery = lazy(() => import('../Gallery'))

export default function Home({ intersectionObserver, elements }) {
	return <>
		<Header intersectionObserver={intersectionObserver} elements={elements} id={0} />
		<Services intersectionObserver={intersectionObserver} elements={elements} id={3} />
		<WhyUs intersectionObserver={intersectionObserver} elements={elements} id={2} />
		{/* <About intersectionObserver={intersectionObserver} elements={elements} id={4} /> */}

		{/* {typeof window !== 'undefined' ? <div /> : <Suspense fallback={<div />}> */}
			{/* <VividGallery intersectionObserver={intersectionObserver} elements={elements} id={6} />
			<VividGalleryExterior intersectionObserver={intersectionObserver} elements={elements} id={6} /> */}
		{/* </Suspense>} */}
		
		{/* {typeof window !== 'undefined' ? <div /> : <Suspense fallback={<div />}> */}
			<MessengerCustomerChat
				pageId="422692724831411"
				appId="184130762835760"
			/>
		{/* </Suspense>} */}
	</>
}
