'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import React from 'react'
import Avatar from '../../../../public/icons/Avatar'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './slider.css'

const testimonials = [
	{
		id: 1,
		name: 'Mike Taylor',
		location: 'Lahore, Pakistan',
		text:
			'"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew' +
			' next. Of believed or diverted no. talking painted pasture yet its express parties use "',
		avatar: '/images/avatar1.jpg',
	},
	{
		id: 2,
		name: 'Chris Thomas',
		location: 'CEO of Red Button',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  onsectetur adipiscing elit Suspendisse varius' +
			' enim in eros elementum tristique. onsectetur adipiscing elit onsectetur onsectetur onsectetur adipiscing elit',
		avatar: '/images/avatar2.jpg',
	},
	{
		id: 3,
		name: 'Sarah Johnson',
		location: 'New York, USA',
		text: 'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
		avatar: '/images/avatar3.jpg',
	},
	{
		id: 4,
		name: 'Sarah Johnson',
		location: 'New York, USA',
		text: 'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
		avatar: '/images/avatar3.jpg',
	},
	{
		id: 5,
		name: 'Sarah Johnson',
		location: 'New York, USA',
		text: 'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
		avatar: '/images/avatar3.jpg',
	},
]

const Testimonials = () => {
	return (
		<section className='mt-[200px] flex justify-between'>
			<div>
				<h4 className='text-big-semibold text-light-blue uppercase'>Testimonials</h4>
				<h2 className='text-heading-bold font-volkhov mt-[8px] leading-[125%] text-[rgba(20,24,62,1)]'>
					What People Say About Us.
				</h2>
			</div>
			<div className='relative flex'>
				<Swiper
					className={'testimonial-swiper'}
					direction={'vertical'}
					modules={[Navigation]}
					navigation={{
						nextEl: '.custom-swiper-button-next',
						prevEl: '.custom-swiper-button-prev',
					}}
					slidesPerView={1}
					spaceBetween={0}
				>
					{testimonials.map((item) => (
						<SwiperSlide className={'swiper-slide w-fit!'} key={item.id}>
							<div className='custom-swiper-slide'>
								<div className={'absolute -top-[34px] -left-[37px] z-10'}>
									<Avatar />
								</div>
								<div className='flex flex-col'>
									<p className='testimonial-text text-base-regular leading-[32px] text-[rgba(94,98,130,1)]'>
										{item.text}
									</p>
									<span className='text-big-regular mt-[34px] font-semibold text-[rgba(94,98,130,1)]'>
										{item.name}
									</span>
									<span className='mt-[5px] text-[14px] text-[rgba(94,98,130,1)]'>
										{item.location}
									</span>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='absolute top-2 right-0 z-10 flex h-full flex-col items-center gap-2'>
					<button className='custom-swiper-button-prev'>
						<ChevronUp className='text-[rgba(62,46,77,1)]' />
					</button>
					<button className='custom-swiper-button-next'>
						<ChevronDown className='text-[rgba(62,46,77,1)]' />
					</button>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
