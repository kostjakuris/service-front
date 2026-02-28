import React from 'react'
import styles from './service-page.module.scss'
import { PaginatedServices } from '@/components/servicesPage'

const ServicePage = () => {
	return (
		<div>
			<h2
				className={
					'text-heading-regular text-gray text-shadow-[0_4px_31px_rgba(0, 0, 0, 0.11)] mt-[85px] text-center'
				}
			>
				Our Services Comprehensive Solutions, All in One Place
			</h2>
			<input type='text' placeholder={'Search service...'} className={styles.service__input} />
			<PaginatedServices />
		</div>
	)
}

export default ServicePage
