import React from 'react'

const AvocadoBox = ({ children, className, innerClass, style, id, containerRef }) => (
	<div ref={containerRef} className={`AvocadoBox ${className}`} id={id} style={style}>
		<div className={`inner ${innerClass}`}>
			{children}
		</div>
	</div>
)

export default AvocadoBox
