import { Hero } from '@/components/homePage'
import HeroBackground from '../../public/icons/HeroBackground'

export default function Home() {
	return (
		<div>
			<div className={'max-tablet:hidden absolute top-0 right-0 -z-1'}>
				<HeroBackground />
			</div>
			<div className={'content-container'}>
				<Hero />
			</div>
		</div>
	)
}
