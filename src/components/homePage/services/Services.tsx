import React from 'react'
import { ServiceCard } from '@/components/homePage'
import Plane from '../../../../public/icons/Plane'
import Micro from '../../../../public/icons/Micro'
import Aerial from '../../../../public/icons/Aerial'
import Settings from '../../../../public/icons/Settings'
import Pluses from '../../../../public/icons/Pluses'
import styles from './services.module.scss'

const Services = () => {
	const services = [
		{
			id: 1,
			title: 'Calculated Weather',
			text: 'Built Wicket long er admire do barton vanity itself do in it.',
			image: <Aerial />,
		},
		{
			id: 2,
			title: 'Best Flights',
			text: 'Engrossed listening. Park gate sell they west hard for the.',
			image: <Plane />,
		},
		{
			id: 3,
			title: 'Local Events',
			text: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
			image: <Micro />,
		},
		{
			id: 4,
			title: 'Customization',
			text: 'We deliver outsourced aviation services for military customers',
			image: <Settings />,
		},
	]
	return (
		<section className={'relative mt-[97px]'}>
			<div
				className={'max-laptop:right-10 max-tablet:hidden absolute -top-[5%] -right-[8%] -z-1'}
			>
				<Pluses />
			</div>
			<h4 className='text-big-semibold text-center text-[rgba(94,98,130,1)]'>CATEGORY</h4>
			<h2 className='text-heading-bold font-volkhov mt-[10px] text-center text-[rgba(20,24,62,1)]'>
				We Offer Best Services
			</h2>
			<div
				className={
					'max-tablet:grid-cols-2 max-mobile:grid-cols-1 my-[108px] grid grid-cols-4 gap-[25px]'
				}
			>
				{services.map((service) => (
					<div key={service.id} className={styles.services}>
						<span className={styles.services__card_hover} />
						<ServiceCard image={service.image} title={service.title} text={service.text} />
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
