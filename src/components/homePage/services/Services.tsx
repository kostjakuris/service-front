import React from 'react'
import { ServiceCard } from '@/components/homePage'
import Plane from '../../../../public/icons/Plane'
import Micro from '../../../../public/icons/Micro'
import Aerial from '../../../../public/icons/Aerial'
import Settings from '../../../../public/icons/Settings'
import Pluses from '../../../../public/icons/Pluses'

const Services = () => {
	const services = [
		{
			id: 1,
			title: 'Calculated Weather',
			text: 'Built Wicket longer admire do barton vanity itself do in it.',
			image: <img src='/images/group1.png' alt='aerieal' />,
		},
		{
			id: 2,
			title: 'Best Flights',
			text: 'Engrossed listening. Park gate sell they west hard for the.',
			image: <img src='/images/group.png' alt='plane' />,
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
			<div className={'max-laptop:right-0 absolute -top-[5%] -right-[8%] -z-1'}>
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
					<div key={service.id} className={'group relative'}>
						<span
							className={
								'bg-light-orange absolute -bottom-[33px] -left-[35px] -z-1 opacity-0 group-hover:opacity-100' +
								' h-[100px] w-[100px] rounded-t-[30px] rounded-br-[10px] ' +
								'group-hover:transition-opacity group-hover:duration-300'
							}
						/>
						<ServiceCard image={service.image} title={service.title} text={service.text} />
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
