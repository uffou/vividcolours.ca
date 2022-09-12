import { useEffect, useRef } from 'react'

export default function useIntersectionObserverRef(intersectionObserver, map, extra) {
	const ref = useRef()
	useEffect(() => {
		const { current } = ref
		intersectionObserver.observe(current)
		map.set(current, extra)
		return () => {
			intersectionObserver.unobserve(current)
			map.delete(current)
		}
	}, [intersectionObserver, map, extra])
	return ref
}
