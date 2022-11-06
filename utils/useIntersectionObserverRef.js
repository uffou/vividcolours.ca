import { useEffect, useRef } from 'react'

export default function useIntersectionObserverRef(intersectionObserver, map, extra) {
	const ref = useRef()
	useEffect(() => {
		const { current } = ref
		if(intersectionObserver){
			intersectionObserver.observe(current)
			map.set(current, extra)
		}
		return () => {
			if(intersectionObserver){
				intersectionObserver.unobserve(current)
				map.delete(current)
			}
		}
	}, [intersectionObserver, map, extra])
	return ref
}
