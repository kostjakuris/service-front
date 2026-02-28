import { ChooseUs, Feedback, Header, Hero, ServiceCards } from '@/components/homePage'
import circleStyles from '@/components/homePage/circleGradient/circle-gradient.module.scss'

export default function Home() {
	return (
		<div>
			<Hero />
			<ServiceCards />
			<div className={'relative flex flex-col items-center'}>
				<span className={circleStyles.circle__gradient} />
				<h2
					className={
						'text-heading-regular text-gray text-shadow-[0_4px_31px_rgba(0, 0, 0, 0.11)] text-center'
					}
				>
					End-To-End Development Services
				</h2>
				<p
					className={
						'text-extralarge-regular mt-[29px] ml-[24px] text-center leading-[105%] opacity-70'
					}
				>
					Sometimes, we need to check the time, wondering when our work or meeting will finish,
					without getting caught by others.
				</p>
				<img className={'mt-[71px]'} src='/images/building.png' alt='building' />
			</div>
			<ChooseUs />
			<Feedback />
		</div>
	)
}
