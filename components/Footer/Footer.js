import React from 'react'

import { OutboundLink } from 'react-ga'


export default function Footer() {
	return <footer>
		<div>© 2019 - Vivid Colours</div>
		<div>Like our site? It’s made by <OutboundLink eventLabel="codemotionapps.com" target="_blank" rel="noopener noreferrer" to="http://codemotionapps.com">Codemotion Apps 👉</OutboundLink></div>
	</footer>
}
