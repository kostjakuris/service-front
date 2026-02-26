import React from 'react'
import { IconProps } from './Instagram'

const Deadlines = ({ className, ...props }: IconProps) => {
	return (
		<svg
			className={className}
			{...props}
			width='17'
			height='18'
			viewBox='0 0 17 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1 1V11.4182H16V1'
				stroke='#848484'
				style={{ stroke: '#848484', strokeOpacity: 1 }}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11 14.3334L8.5 16.8334L6 14.3334'
				stroke='#848484'
				strokeWidth='2'
				style={{ stroke: '#848484', strokeOpacity: 1 }}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.5 11.4166V16.8333'
				stroke='#848484'
				strokeWidth='2'
				style={{ stroke: '#848484', strokeOpacity: 1 }}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M6.14331 7.5241L10.8574 2.81006'
				stroke='#848484'
				strokeWidth='2'
				style={{ stroke: '#848484', strokeOpacity: 1 }}
				strokeLinecap='round'
			/>
			<path
				d='M6.14331 2.80969L10.8574 7.52375'
				stroke='#848484'
				strokeWidth='2'
				style={{ stroke: '#848484', strokeOpacity: 1 }}
				strokeLinecap='round'
			/>
		</svg>
	)
}

export default Deadlines
