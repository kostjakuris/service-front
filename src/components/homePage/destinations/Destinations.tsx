import React from 'react'
import styles from './destinations.module.scss'
import Navigation from '../../../../public/icons/Navigation'

const Destinations = () => {
	return (
		<section className={'mt-[92px]'}>
			<h4 className='text-big-semibold text-center text-[rgba(94,98,130,1)]'>Top Selling</h4>
			<h2 className='text-heading-bold font-volkhov mt-[10px] text-center text-[rgba(20,24,62,1)]'>
				Top Destinations
			</h2>
			<div className='my-[60px] flex flex-wrap items-center justify-center gap-[43px]'>
				<div className={`${styles.destinations__card} bg-[url("/images/coliseum.png")]`}>
					<div className={styles.destinations__card_info}>
						<h5 className='text-big-regular flex leading-[125%] text-[rgba(94,98,130,1)]'>
							Rome, Italy
							<span className={'ml-auto'}>$5,42k</span>
						</h5>
						<span className='text-base-regular mt-[19px] flex gap-[14px] leading-[125%] text-[rgba(94,98,130,1)]'>
							<Navigation />
							10 Days Trip
						</span>
					</div>
				</div>
				<div className={`${styles.destinations__card} bg-[url("/images/london.jpg")]`}>
					<div className={styles.destinations__card_info}>
						<h5 className='text-big-regular flex leading-[125%] text-[rgba(94,98,130,1)]'>
							London, UK
							<span className={'ml-auto'}>$4.2k</span>
						</h5>
						<span className='text-base-regular mt-[19px] flex gap-[14px] leading-[125%] text-[rgba(94,98,130,1)]'>
							<Navigation />
							12 Days Trip
						</span>
					</div>
				</div>
				<div className={`${styles.destinations__card} bg-[url("/images/europe.png")]`}>
					<div className={styles.destinations__card_info}>
						<h5 className='text-big-regular flex leading-[125%] text-[rgba(94,98,130,1)]'>
							Full Europe
							<span className={'ml-auto'}>$15k</span>
						</h5>
						<span className='text-base-regular mt-[19px] flex gap-[14px] leading-[125%] text-[rgba(94,98,130,1)]'>
							<Navigation />
							28 Days Trip
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Destinations
