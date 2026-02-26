import React from 'react'
import { ServiceCard } from '@/components/homePage'

const ServiceCards = () => {
	return (
		<div
			className={
				'max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-tablet:mb-[70px] mt-[65px] grid grid-cols-4 gap-[16px]' +
				' mb-[142px]'
			}
		>
			<ServiceCard
				title={'Web Development'}
				text={
					'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
				}
			/>
			<ServiceCard
				title={'App Development'}
				text={
					'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
				}
			/>
			<ServiceCard
				title={'AR/VR Development'}
				text={
					'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit' +
					'officia consequat duis enim velit mollitxcvxcvxc ccvkckdk kdkk k kdfkdkd jkvkdk kkvk.'
				}
			/>
			<ServiceCard
				title={'Blockchain Development'}
				text={
					'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit' +
					'officia consequat duis enim velit mollitxcvxcvxc ccvkckdk kdkk k kdfkdkd jkvkdk kkvk' +
					'k kvckvb;klvjbroierp[to ovporite[rpoti[ orpfo[eroi.'
				}
			/>
		</div>
	)
}

export default ServiceCards
