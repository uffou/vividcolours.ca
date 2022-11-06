/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from 'react'
import { Dots } from '../../../Avocado/ImageShow/ImageShow'
import LeftIcon from '../../../../public/left-big.svg'
import RightIcon from '../../../../public/right-big.svg'

const reviews = [
	{
		title: '“This company is wonderful”',
		description: 'This company is wonderful. We got our quote within hours of our initial contact. The work was scheduled incredibly quickly and started on time and in a very professional manor. We were so impressed with the quality and price that we have already gotten a quote and scheduled a date for more work. Our home was  left very clean and Boris followed up to make sure we were happy with everything. The reason we asked to have Vivid Colours Painting come to our home was because Boris did a job that we saw and they recommended him. I would also highly recommend Vivid Colours Painting.',
		company: 'Dawn Ferguson',
		// author: 'Dawn Ferguson',
		avatar: require('./img/dawn.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“Highly recommending VIVID COLOURS!!”',
		description: `I would love to share my experience with Vivid colours...
		I am owner of Lucy’s Barber shop in Kitchener.
		The only time I had available to repaint my shop, was Christmas time, when I was able to close my business for a few days...
		Didn’t have big hope that any professional painting company would do this-working over the holidays.
		VIVID COLOURS DID!!
		Boris, the owner explain, that yes, they’re trying to work at the time, convenient for businesses.\n
		AMAZING WORK,
		EXTREME ATTENTION TO DETAIL
		VERY WELL ORGANIZED
		CLEAN!!!`,
		company: 'Lucy\'s Barbershop',
		// website: 'https://veememedia.com/',
		author: 'Lucy Hall',
		avatar: require('./img/lucy.jpg'),
		// occupation: 'Business Owner',
		stars: 5,

	},
	{
		title: '“Vivid painting did an excellent job!”',
		description: 'Vivid painting did an excellent job! We were very impressed with the thorough job and attention to detail. The service was professional & high quality. Great to support a local, upcoming company!',
		company: 'Amy Koppert',
		// author: 'Amy Koppert',
		avatar: require('./img/amy.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“Boris and his team are meticulous in the painting \n and treated my house as they would theirs.”',
		description: 'Vivid Colours was incredible to work with. From the first email I sent for a quote, Boris was responsive, flexible with providing an estimate based only on my floor plan and incredibly professional. \n Boris and his team are meticulous in the painting and treated my house as they would theirs. I would (and already have!) highly recommend Vivid Colors to anyone looking to outsource their painting jobs!',
		company: 'Whitney Susanna',
		// website: 'https://veememedia.com/',
		// author: 'Whitney Susanna ',
		avatar: require('./img/Whitney.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“Prompt, professional and respectful of safety protocol.”',
		description: 'Boris responded quickly to my inquiry about his services. Came in person to do the quote and then sent the quote and suggested paint colours within minutes of being here. Prompt, professional and respectful of safety protocol. We’re preparing our house for sale and I have no doubt the quality of his workmanship will help us get the best price possible. Thanks to Boris and Vivid Colours for everything.',
		company: 'Linda Fauteux',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Linda.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“My house feels like a new home!”',
		description: 'Boris painted my entire main floors trim, ceilings, doors and walls. He was professional and fast. I am so happy with his work and would highly recommend him to everyone. My house feels like a new home! Thanks so much!',
		company: 'Kim Dubreuil',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Kim.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“You can tell they really care about the quality of their work and their customers.”',
		description: 'Vivid Colours is incredible! Their attention to detail, friendliness, and speed really set them apart. You can tell they really care about the quality of their work and their customers. Work gets done thoroughly, cleanly, and quickly. I highly recommend them for any of your painting needs.',
		company: 'Camara Nabrotzky',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Camara.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“I was truly impressed by their competence, flexibility, and customer care!”',
		description: 'I’m a landlady who needed to have an apartment painted asap – the previous tenants had just moved out and left the walls/paint in pretty bad shape; new tenants were about to move in… I came across a flier for Vivid Colours Painting, so I contacted them and was much pleased by how quickly and beautifully everything worked out! They were able to adjust to my busy schedule easily. I was truly impressed by their competence, flexibility, and customer care! I will definitely keep using their services and will strongly recommend Vivid Colours !',
		company: 'Lilly Roberts',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Lilly.jpg'),
		occupation: 'Landlord',
		stars: 5,
	},
	{
		title: '“LOVED the colours, quality, and speed of their work!”',
		description: 'FINALLY somebody who knows what they are doing! LOVED the colours, quality, and speed of their work! HIGHLY recommend them - fresh, innovative, professional, affordable, neat, resourceful, energetic, .... BRILLIANT!',
		company: 'Maggie Grant',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Maggie.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“They did a fantastic job.”',
		description: 'Very friendly and professional! They did a fantastic job. I would definitely recommend them! Thank you VIVID COLOURS ;)',
		company: 'Dobrina Encheva',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Dobrina.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“Would highly recommend. Great service. Great price.”',
		description: 'Boris was a great help and answered all our concerns about the type of paint I wanted and what would work best in our living room and kitchen. Super helpful very professional. Would highly recommend. Great service. Great price. Keep up the amazing work Boris! 👍',
		company: 'Carlos Ayala',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Carlos.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},
	{
		title: '“He did an amazing job, did it quickly, and did it on short notice.”',
		description: 'He did an amazing job, did it quickly, and did it on short notice. Also did miscellaneous contracting tasks. The colour turned out quite vivid :)',
		company: 'Allen Lin',
		// website: 'https://veememedia.com/',
		// author: '',
		avatar: require('./img/Allen.jpg'),
		occupation: 'Home Owner',
		stars: 5,
	},


]

/*
function shuffle(array) {
	let currentIndex = array.length

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		const randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		const temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}
*/


export default function Reviews() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const numberOfVisibleReviews = 3
	const visibleReviews = reviews.slice(currentIndex, currentIndex + numberOfVisibleReviews)
	const currentPageIndex = currentIndex / numberOfVisibleReviews
	// eslint-disable-next-line no-magic-numbers
	const showControls = reviews.length > 3

	const next = useCallback(() => {
		if (currentIndex >= reviews.length - 1 - numberOfVisibleReviews) {
			setCurrentIndex(0)
		} else {
			setCurrentIndex(currentIndex + numberOfVisibleReviews)
		}
	}, [currentIndex, setCurrentIndex, numberOfVisibleReviews])

	const prev = useCallback(() => {
		if (currentIndex <= 0) {
			setCurrentIndex(reviews.length - numberOfVisibleReviews)
		} else {
			setCurrentIndex(currentIndex - numberOfVisibleReviews)
		}
	}, [currentIndex, setCurrentIndex, numberOfVisibleReviews])

	const setPage = ((index) => {
		setCurrentIndex(index * numberOfVisibleReviews)
	}, [setCurrentIndex, numberOfVisibleReviews])


	return <div className="Reviews">
		{showControls && <LeftIcon className="prevImage pr" onClick={prev} />}
		{visibleReviews.map((review, index) => <div key={index} className="review">
			<div className="review-upper">
				<img className="quotes" src={require('./img/quotes.png')} />
				<h3>{review.title}</h3>
				<p className="description">{review.description}</p>

			</div>
			<div className="review-info">
				<img src={review.avatar} className="avatar" />
				<div className="names">
					<div><img src={require('./img/stars.png')} /></div>
					<a target="_blank" rel="noopener noreferrer" href={review.website}>{review.company}</a>
					<p className="author">{review.author}</p>
					<p className="occupation">{review.occupation}</p>
				</div>
			</div>
		</div>)}
		{showControls && <RightIcon className="nextImage pl" onClick={next} />}
		{showControls && <Dots currentIndex={currentPageIndex} length={reviews.length / numberOfVisibleReviews} setIndex={setPage} />}
	</div>
}
