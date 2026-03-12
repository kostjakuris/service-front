import React from 'react'
import Selection from '../../../../public/icons/Selection'
import styles from './trips.module.scss'
import Greece from '../../../../public/icons/Greece'
import WaterSport from '../../../../public/icons/WaterSport'
import Taxi from '../../../../public/icons/Taxi'
import Leaf from '../../../../public/icons/Leaf'

import Send from '../../../../public/icons/Send'
import Map from '../../../../public/icons/Map'
import Building from '../../../../public/icons/Building'
import Church from '../../../../public/icons/Church'
import { Heart } from 'lucide-react'

const steps = [
	{
		id: 1,
		title: 'Choose Destination',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
		styles: 'bg-[rgba(240,187,31,1)] p-[13px]',
		image: <Selection />,
	},
	{
		id: 2,
		title: 'Make Payment',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
		styles: 'bg-[rgba(241,90,43,1)] pl-[13px] pr-[12px] pt-[14px] pb-[16px]',
		image: <WaterSport />,
	},
	{
		id: 3,
		title: 'Reach Airport on Selected Date',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
		styles: 'bg-[rgba(0,99,128,1)] pl-[13px] pr-[12px] pt-[16px] pb-[14px]',
		image: <Taxi />,
	},
]

const Trips = () => {
	return (
		<section className='flex w-full flex-wrap items-center justify-between pt-[30px]'>
			<div className={'w-full max-w-[45%]'}>
				<h4 className='text-big-semibold text-light-blue'>Easy and Fast</h4>
				<h2 className='text-heading-bold font-volkhov mt-[15px] text-[rgba(20,24,62,1)]'>
					Book Your Next Trip In 3 Easy Steps
				</h2>
				<div className='mt-[31px] flex w-full max-w-[90%] flex-col gap-[48px]'>
					{steps.map((step) => (
						<div key={step.id} className='flex items-start gap-[21px]'>
							<span className={`rounded-[13px] ${step.styles}`}>{step.image}</span>
							<div>
								<h5 className={`${styles.trips__steps_text} font-bold`}>{step.title}</h5>
								<p className={`${styles.trips__steps_text} mt-[4px]`}>{step.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='relative mx-auto'>
				<div className={styles.trips__card}>
					<span className={styles.trips__card_gradient} />
					<Greece />
					<h4 className='text-big-regular mt-[26px] leading-[125%] tracking-[0.015em] text-black'>
						Trip To Greece
					</h4>
					<p className='text-base-regular mt-[13px] leading-[125%] -tracking-[0.005em] text-[rgba(132,130,154,1)]'>
						14-29 June | by Robbin joseph
					</p>
					<div className={'mt-[21px] flex items-start gap-[15px]'}>
						<span className={'rounded-full bg-[rgba(245,245,245,1)] p-[11px]'}>
							<Leaf />
						</span>
						<span className={'rounded-full bg-[rgba(245,245,245,1)] p-[11px]'}>
							<Map />
						</span>
						<span className={'rounded-full bg-[rgba(245,245,245,1)] p-[11px]'}>
							<Send />
						</span>
					</div>
					<div className='mt-[20px] flex items-center justify-between'>
						<span className='text-base-regular flex gap-[15px] leading-[125%] -tracking-[0.02em] text-[rgba(132,130,154,1)]'>
							<Building />
							24 people going
						</span>
						<span>
							<Heart className={'font-normal text-[rgba(65,82,202,1)]'} />
						</span>
					</div>
				</div>
				<div className={styles.trips__card_progress}>
					<div>
						<Church />
					</div>
					<div className={'w-fit'}>
						<p className='text-[14px] leading-[125%] -tracking-[0.035em] text-[rgba(132,130,154,1)]'>
							Ongoing
						</p>
						<h5 className='text-big-regular mt-[6px] leading-[125%] -tracking-[0.015em] text-[rgba(8,8,9,1)]'>
							Trip to Rome
						</h5>
						<p className='mt-[14px] text-[14px] leading-[125%] -tracking-[0.055em]'>
							<span className={'text-[rgba(138,121,223,1)]'}>40%</span> completed
						</p>
						<div className='mt-[10px] h-[5px] w-[156px] rounded bg-[rgba(245,245,245,1)]'>
							<div className='h-full w-[40%] rounded bg-[rgba(138,121,223,1)]'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Trips
