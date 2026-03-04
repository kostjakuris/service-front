'use client'
import React from 'react'
import Button from '@/components/ui/button/Button'
import { ArrowRight } from 'lucide-react'
import { PaginatedServices } from '@/components/servicesPage'

const ServiceInfo = () => {
	return (
		<div>
			<h1 className={'text-heading-regular mt-[30px]'}>Web development</h1>
			<p className={'text-base-regular mt-[14px] text-black opacity-50'}>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
				consequat duis enim velit mollit.
			</p>
			<Button
				variant={'primary'}
				className={'mt-[15px] flex items-center gap-[12px] py-[13.5px] pr-[14px] pl-[13px]'}
			>
				Plan service
				<ArrowRight className={'w-[24px]'} />
			</Button>
			<div
				className={
					'max-tablet:grid-cols-[repeat(auto-fit,max-content)] max-mini-tablet:grid-cols-2 mt-[30px] grid' +
					' max-mobile:grid-cols-1 grid-cols-4 justify-center justify-items-center gap-[20px]'
				}
			>
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className={'flex flex-col items-center'}>
						<h4 className={'text-large-regular mb-[7px] w-fit'}>Service 1</h4>
						<img className={'rounded-[10px]'} src='/images/phone.jpeg' alt='phone' />
						<p className={'text-base-regular mt-[14px] w-fit text-black opacity-50'}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
						</p>
					</div>
				))}
			</div>
			<div>
				<h1 className={'text-heading-regular mt-[50px]'}>Another services</h1>
				<PaginatedServices page={'1'} isPagination={false} />
			</div>
		</div>
	)
}

export default ServiceInfo
