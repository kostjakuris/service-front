import React, { FC } from 'react'
import styles from './service-card.module.scss'

interface ServiceCardProps {
	title: string
	text: string
}

const ServiceCard: FC<ServiceCardProps> = ({ title, text }) => {
	return (
		<a href={'/services/1'} className={styles.card}>
			<p className={styles.card__title}>{title}</p>
			<p className={`text-base-regular mt-[14px] text-black opacity-50`}>{text}</p>
			<button className={'mt-auto flex cursor-pointer items-center gap-[16px] pt-[28px]'}>
				<span className={'text-small-regular text-dark-blue'}>Learn More</span>
			</button>
		</a>
	)
}

export default ServiceCard
