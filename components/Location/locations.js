// used in buildSitemap.js

class Location {
	constructor(name) {
		this.name = name
		this.state = 'ON'
		this.href = name.toLowerCase().replace(/\./g, '').replace(/ /g, '-')
	}
}

module.exports = [
	new Location('Kitchener'),
	new Location('Waterloo'),
	new Location('Cambridge'),
	new Location('Guelph'),
	new Location('Conestogo'),
	new Location('Elmira'),
	new Location('Elora'),
	new Location('Wellesley'),
	new Location('Puslinch'),
	new Location('Ayr'),
	new Location('New Hamburg'),
	new Location('St. Jacobs'),
	new Location('Baden'),
]
