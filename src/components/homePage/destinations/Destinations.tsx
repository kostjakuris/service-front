import React from 'react'
import styles from './destinations.module.scss'
import Navigation from '../../../../public/icons/Navigation'
import Decor from '../../../../public/icons/Decor'

const Destinations = () => {
	const destinations = [
		{
			id: 1,
			image: '/images/coliseum.png',
			title: 'Rome, Italy',
			price: '$5,42k',
			duration: '10 Days Trip',
		},
		{
			id: 2,
			image: '/images/london.jpg',
			title: 'London, UK',
			price: '$4.2k',
			duration: '12 Days Trip',
		},
		{
			id: 3,
			image: '/images/europe.png',
			title: 'Full Europe',
			price: '$15k',
			duration: '28 Days Trip',
		},
	]
	return (
		<section className={'mt-[92px]'}>
			<h4 className='text-big-semibold text-center text-[rgba(94,98,130,1)]'>Top Selling</h4>
			<h2 className='text-heading-bold font-volkhov mt-[10px] text-center text-[rgba(20,24,62,1)]'>
				Top Destinations
			</h2>
			<div className='max-tablet:grid-cols-2 max-mobile:grid-cols-1 my-[60px] grid grid-cols-3 justify-items-center gap-[43px]'>
				{destinations.map((destination) => (
					<div
						key={destination.id}
						style={{ backgroundImage: `url(${destination.image})` }}
						className={styles.destinations__card}
					>
						<div className={styles.destinations__card_info}>
							<h5 className='text-big-regular flex leading-[125%] text-[rgba(94,98,130,1)]'>
								{destination.title}
								<span className={'ml-auto'}>{destination.price}</span>
							</h5>
							<span className='text-base-regular mt-[19px] flex gap-[14px] leading-[125%] text-[rgba(94,98,130,1)]'>
								<Navigation />
								{destination.duration}
							</span>
						</div>
						{destination.id === 3 && (
							<div className={'max-laptop:hidden absolute -right-[50px] bottom-[47px] -z-1'}>
								<Decor />
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	)
}

export default Destinations
