import React from 'react'
import { IconProps } from './Instagram'

const Details = ({ className, ...props }: IconProps) => {
	return (
		<svg
			className={className}
			{...props}
			width='17'
			height='15'
			viewBox='0 0 17 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M15 0H1.66667C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667V13.3333C0 13.7754 0.175595 14.1993 0.488155 14.5118C0.800716 14.8244 1.22464 15 1.66667 15H15C15.442 15 15.8659 14.8244 16.1785 14.5118C16.4911 14.1993 16.6667 13.7754 16.6667 13.3333V1.66667C16.6667 1.22464 16.4911 0.800716 16.1785 0.488155C15.8659 0.175595 15.442 0 15 0ZM7.5 11.6667H2.5V10H7.5V11.6667ZM14.1667 8.33333H2.5V6.66667H14.1667V8.33333ZM14.1667 5H2.5V3.33333H14.1667V5Z'
				fill='#858585'
				style={{ fill: '#858585', fillOpacity: 1 }}
			/>
		</svg>
	)
}

export default Details
