/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from 'react'
import LeftIcon from '../../../public/left-big.svg'
import RightIcon from '../../../public/right-big.svg'

export const Dots = ({ currentIndex, length, setIndex }) => <div className="Dots">
	{Array.from({ length }).map((_, index) => <div
		key={index}
		className={`dot${index === currentIndex ? ' selected' : ''}`}
		onClick={() => setIndex(index)}
	/>)}
</div>

export default function ImageShow({ images, Icon, currentIndex: currentIndexProp }) {
	const [currentIndex, setCurrentIndex] = useState(currentIndexProp || 0)
	const next = useCallback(() => {
		const { length } = images
		if (currentIndex === length - 1) {
			setCurrentIndex(0)
		} else {
			setCurrentIndex(currentIndex + 1)
		}
	}, [currentIndex, setCurrentIndex])
	const prev = useCallback(() => {
		const { length } = images
		if (currentIndex === 0) {
			setCurrentIndex(length - 1)
		} else {
			setCurrentIndex(currentIndex - 1)
		}
	}, [currentIndex, setCurrentIndex])

	return <div className="ImageShow">

		<LeftIcon className="prevImage" onClick={prev} />
		{images.map((screenshot, index) => {
			const props = {
				key: index,
				src: screenshot.img,
				loading: 'lazy',
			}

			index === currentIndex && (props.className = '__show')

			return Icon !== null
				? <Icon {...props} />
				: React.createElement('img', props)
		})}
		<RightIcon className="nextImage" onClick={next} />
		<Dots currentIndex={currentIndex} length={images.length} setIndex={setCurrentIndex} />
	</div>
}
