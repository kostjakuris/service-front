'use client'
import React, { useMemo } from 'react'
import { ServiceCard } from '@/components/homePage'
import { useSearchParams } from 'next/navigation'
import { Pagination } from '@/components/servicesPage'

type FakeService = {
	id: string
	title: string
	text: string
}

const PaginatedServices = () => {
	const params = useSearchParams()
	const page = Math.max(1, parseInt(params.get('page') || '1', 10))

	const serviceLimit = 12

	const allServices: FakeService[] = useMemo(() => {
		return Array.from({ length: 153 }).map((_, index) => ({
			id: `service-${index + 1}`,
			title: `Service ${index + 1}`,
			text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
		}))
	}, [])

	const totalCount = allServices.length
	const totalPages = Math.ceil(totalCount / serviceLimit)

	const safePage = Math.min(page, totalPages || 1)
	const start = (safePage - 1) * serviceLimit
	const end = start + serviceLimit
	const pageItems = allServices.slice(start, end)

	return (
		<div>
			<div className='max-tablet:grid-cols-2 max-mobile:grid-cols-1 my-[35px] grid grid-cols-4 gap-[16px]'>
				{pageItems.map((item) => (
					<ServiceCard key={item.id} title={item.title} text={item.text} />
				))}
			</div>
			{totalPages > 1 && (
				<Pagination data-testid='product-pagination' page={safePage} totalPages={totalPages} />
			)}
		</div>
	)
}

export default PaginatedServices
