import React, { FC } from 'react'
import styles from './service-card.module.scss'
import Service from '../../../../public/icons/Service'
import BigArrowRight from '../../../../public/icons/BigArrowRight'

interface ServiceCardProps {
	title: string
	text: string
}

const ServiceCard: FC<ServiceCardProps> = ({ title, text }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__icon}>
				<Service />
			</div>
			<p className={styles.card__title}>{title}</p>
			<p className={`text-base-regular mt-[14px] text-black opacity-50`}>{text}</p>
			<button className={'mt-auto flex cursor-pointer items-center gap-[16px] pt-[28px]'}>
				<span className={'text-small-regular text-dark-blue'}>Learn More</span>
				<BigArrowRight />
			</button>
		</div>
	)
}

export default ServiceCard
