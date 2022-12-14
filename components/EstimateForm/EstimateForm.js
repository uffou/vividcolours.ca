/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { useEstimateFormContext } from './EstimateFormContext'
import LeftArrowIcon from '../../public/left-arrow.svg'

function stopPropagation(event) {
	event.stopPropagation()
}

export default function EstimateForm() {
	const { hide } = useEstimateFormContext()
	return <div className="form-overlay" onClick={hide}>
		<div className="EstimateForm" onClick={stopPropagation}>
			<div className="left-arrow-button" onClick={hide}>
				<LeftArrowIcon className="mr v"  />
				Back
			</div>
			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekCdY1c2HuIeIHleFzX3vCJZX619Qslviut-YAOoEom6rwwA/viewform?embedded=true" height="1125" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
		</div>
	</div>
}
