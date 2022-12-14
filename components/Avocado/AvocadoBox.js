import React from 'react'

const AvocadoBox = ({ children, className, innerClassName, style, id = undefined, containerRef = undefined }) => (
	<div ref={containerRef} className={`AvocadoBox ${className}`} id={id} style={style}>
		<div className={`inner ${innerClassName}`}>
			{children}
		</div>
	</div>
)

export default AvocadoBox
