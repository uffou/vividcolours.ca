import React, { createContext, useContext, useState, useCallback } from 'react'
import { event } from 'react-ga'

const Context = createContext()

export function useEstimateFormContext() {
	return useContext(Context)
}

export function EstimateFormContextProvider({ children }) {
	const [isShown, setIsShown] = useState(false)

	const show = useCallback((pageName) => {
		event({
			category: 'User',
			action: 'Clicked on Show Form',
			label: `Show Form (${pageName})`,
		})
		setIsShown(true)
	}, [setIsShown])

	const hide = useCallback(() => {
		setIsShown(false)
	}, [setIsShown])

	return <Context.Provider value={{ isShown, show, hide }}>
		{children}
	</Context.Provider>
}
