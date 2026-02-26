import React from 'react'
import Details from '../../../../public/icons/Details'
import Award from '../../../../public/icons/Award'
import People from '../../../../public/icons/People'
import Deadlines from '../../../../public/icons/Deadlines'
import styles from './choose-us.module.scss'

const ChooseUs = () => {
	return (
		<div className={'relative'}>
			<span className={styles.chooseUs__circle} />
			<h2
				className={
					'text-heading-regular text-gray text-shadow-[0_4px_31px_rgba(0, 0, 0, 0.11)] mt-[85px] text-center'
				}
			>
				Why Choose Us
			</h2>
			<p
				className={
					'text-extralarge-regular my-[29px] ml-[24px] text-center leading-[105%] opacity-70'
				}
			>
				Sometimes, we need to check the time, wondering when our work or meeting will finish,
				without getting caught by others.
			</p>
			<div className={'max-tablet:flex-col flex items-center justify-between gap-[65px]'}>
				<img
					className={'h-fit w-fit'}
					src='/images/serviceCharacteristic.png'
					alt='service characteristic'
				/>
				<div className={'max-tablet:px-[35px] max-mini-tablet:px-0'}>
					<div className={'flex items-center gap-[15px]'}>
						<Details />
						<p className={'text-large-regular leading-[152%] text-[#484848]'}>
							Attention to Details
						</p>
					</div>
					<div>
						<div className={'mt-[6px] flex items-center gap-[16px]'}>
							<Award />
							<p className={'text-large-regular leading-[152%] text-[#484848]'}>
								A plan for success
							</p>
						</div>
						<p className={styles.chooseUs__text}>
							You want results. We have found that the best way to get them is with up front
							research – of your company, competitors, target market and customer
							psychographics. Only after we fully understand you and your customers, do we
							recommend a plan of attack.
						</p>
					</div>
					<div className={'mt-[6px] flex items-center gap-[16px]'}>
						<People />
						<p className={'text-large-regular leading-[152%] text-[#484848]'}>Experts Only</p>
					</div>
					<div className={'mt-[6px] flex items-center gap-[16px]'}>
						<Deadlines />
						<p className={'text-large-regular leading-[152%] text-[#484848]'}>
							Meeting Deadlines
						</p>
					</div>
					<div className={'mt-[6px] flex items-center gap-[16px]'}>
						<Award />
						<p className={'text-large-regular leading-[152%] text-[#484848]'}>
							Award-winning
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseUs
