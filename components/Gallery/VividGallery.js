/* eslint-disable react/jsx-no-bind */
import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { exteriorPhotos, photos, smallExteriorPhotos, smallPhotos } from './photos'
import { event } from "nextjs-google-analytics"
// import useIntersectionObserverRef from '../../utils/useIntersectionObserverRef'
import { PageHead } from 'components/PageHead'

const metaTitle = 'Gallery - Vivid Colours Painting'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VividGallery = ({ intersectionObserver, elements, id }) => {
	// const ref = intersectionObserver && useIntersectionObserverRef(intersectionObserver, elements, id)

	const [currentImage, setCurrentImage] = useState(0)
	const [viewerIsOpen, setViewerIsOpen] = useState(false)

	const openLightbox = useCallback((_event, { index }) => {
		setCurrentImage(index)
		setViewerIsOpen(true)
		event({
			category: 'User',
			action: 'Opened Gallery',
			label: index.toString(),
		})
	}, [])

	const closeLightbox = () => {
		setCurrentImage(0)
		setViewerIsOpen(false)
	}

	return (
		<div id="gallery">
			{!intersectionObserver && <div style={{ height: 60 }} />}
			{!intersectionObserver && <PageHead title={metaTitle} />}
			<Gallery margin={0.5} photos={smallPhotos} targetRowHeight={180} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={photos.map(x => ({
								...x,
								srcset: x.srcSet,
								caption: x.title,
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	)
}

// eslint-disable-next-line react/no-multi-comp, @typescript-eslint/no-unused-vars
export const VividGalleryExterior = ({ intersectionObserver, elements, id }) => {
	// const ref = intersectionObserver && useIntersectionObserverRef(intersectionObserver, elements, id)

	const [currentImage, setCurrentImage] = useState(0)
	const [viewerIsOpen, setViewerIsOpen] = useState(false)

	const openLightbox = useCallback((_event, { index }) => {
		setCurrentImage(index)
		setViewerIsOpen(true)
		event({
			category: 'User',
			action: 'Opened Gallery',
			label: index.toString(),
		})
	}, [])

	const closeLightbox = () => {
		setCurrentImage(0)
		setViewerIsOpen(false)
	}

	return (
		<div id="exterior-gallery" style={{ paddingTop: '16px' }}>
			{!intersectionObserver && <div style={{ height: 60 }} />}
			{!intersectionObserver && <PageHead title={metaTitle} />}
			<Gallery margin={0.5} photos={smallExteriorPhotos} targetRowHeight={180} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={exteriorPhotos.map(x => ({
								...x,
								srcset: x.srcSet,
								caption: x.title,
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	)
}

export default VividGallery
