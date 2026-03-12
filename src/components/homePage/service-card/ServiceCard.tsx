'use client'
import React, { FC, useRef } from 'react'
import styles from './service-card.module.scss'
import Link from 'next/link'

interface ServiceCardProps {
	title: string
	text: string
	image: React.ReactNode
}

const ServiceCard: FC<ServiceCardProps> = ({ title, text, image }) => {
	const cardRef = useRef<HTMLAnchorElement>(null)
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			if (!cardRef.current) return
			cardRef.current.style.backgroundColor = 'transparent'
		}, 300)
	}

	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		if (!cardRef.current) return
		cardRef.current.style.backgroundColor = 'white'
	}

	return (
		<Link
			href={'/services/1'}
			className={styles.card}
			ref={cardRef}
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
		>
			<div className={styles.card__icon}>{image}</div>
			<h4 className={styles.card__title}>{title}</h4>
			<p
				className={`text-base-regular mt-[15px] text-center leading-[26px] text-[rgba(94,98,130,1)]`}
			>
				{text}
			</p>
		</Link>
	)
}

export default ServiceCard
