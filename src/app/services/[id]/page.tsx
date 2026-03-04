import React from 'react'
import { ServiceInfo } from '@/components/serviceInfoPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Service info',
	description: 'Explore opportunity of this service.',
}

const Page = () => {
	return (
		<div>
			<ServiceInfo />
		</div>
	)
}

export default Page
