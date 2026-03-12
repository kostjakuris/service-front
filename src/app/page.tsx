import {
	Destinations,
	Hero,
	Services,
	Sponsors,
	Subscribe,
	Testimonials,
	Trips,
} from '@/components/homePage'

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<Destinations />
			<Trips />
			<Testimonials />
			<Sponsors />
			<Subscribe />
		</main>
	)
}
