import React, { useRef, useEffect } from 'react'

const MouseScrollAnimation = ({ text }) => {
	const ref = useRef()

	useEffect(() => {
		function handler() {
			if (window.scrollY) {
				ref.current.classList.add('hide-mouse')
			} else {
				ref.current.classList.remove('hide-mouse')
			}
		}
		window.addEventListener('scroll', handler, { passive: true })
		return () => {
			window.removeEventListener('scroll', handler)
		}
	}, [])

	useEffect(() => {
		function startscroll() {
			requestAnimationFrame(() => {
				ref.current.classList.remove('hideScrolling')
				ref.current.classList.add('startScrolling')
			})
		}
		function hidescroll() {
			requestAnimationFrame(() => {
				ref.current.classList.remove('preScrolling')
				ref.current.classList.add('hideScrolling')
				setTimeout(startscroll, 200)
			})
		}
		function prescroll() {
			requestAnimationFrame(() => {
				ref.current.classList.remove('doneScrolling')
				ref.current.classList.add('preScrolling')
				setTimeout(hidescroll, 200)
			})
		}

		function unscroll() {
			requestAnimationFrame(() => {
				ref.current.classList.remove('scrolling')
				ref.current.classList.add('doneScrolling')
				setTimeout(prescroll, 300)
			})
		}
		function scroll() {
			requestAnimationFrame(() => {
				ref.current.classList.remove('startScrolling')
				ref.current.classList.add('scrolling')
				setTimeout(unscroll, 500)
			})
		}
		const interval = setInterval(scroll, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return <div className="mouse-container">
		<div ref={ref} className="MouseScrollAnimation" />
		{text && <span className="under-mouse-text center-it mt">{text}</span>}
	</div>
}

export default MouseScrollAnimation
