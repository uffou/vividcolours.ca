import Link from 'next/link'
import React, { Fragment } from 'react'

import locations from './locations'

function scrollTop() {
	window.scroll({ top: 0 })
}

export function Links() {
	return <>
		<h2 className="areas-links-header">Vivid Colours is proud to serve the following areas:</h2>
		<p style={{ maxWidth: 540 }}>{locations.map((l, i) => <Fragment key={l.href}>
			<Link class="areas-links-link" href={`/${l.href}/`} onClick={scrollTop}>
				{l.name}
				</Link>{i !== locations.length - 1 && ', '}
				</Fragment>)}... and in between.</p>
	</>
}
