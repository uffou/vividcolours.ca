/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React from 'react'

const AvocadoTabs = ({ color, selectedBg, selectedColor, options, selectedKey, onSelect, horizontal, className }) => {
	const style = { color }

	const selectedStyle = { position: 'relative', borderColor: selectedBg, color: 'transparent', backgroundColor: selectedBg }

	const fixBoldText = { top: 4, position: 'absolute', color: selectedColor || color, fontWeight: 'bold' }


	return <div className={`AvocadoTabs ${className} ${horizontal && 'horizontal'}`}>
		{Object.values(options).map(({ Icon, title, id, image }) => <div
			key={id}
			className="item v"
			style={
				selectedKey === id
					? selectedStyle
					: style}
			onClick={() => onSelect(id)}
		>
			{Icon !== null && <span className="v mr"><Icon /></span>}
			{title}
			{selectedKey === id && <div className="v" style={fixBoldText}>{Icon !== null && <span className="v mr"><Icon /></span>}{title}</div>}
		</div>)}
	</div>
}

export default AvocadoTabs
