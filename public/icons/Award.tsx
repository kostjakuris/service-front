import React from 'react'
import { IconProps } from './Instagram'

const Award = ({ className, ...props }: IconProps) => {
	return (
		<svg
			className={className}
			{...props}
			width='15'
			height='20'
			viewBox='0 0 15 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M7.1325 0L9.21875 1.08L11.5413 1.4325L12.5938 3.5325L14.265 5.1825L13.8825 7.5L14.265 9.8175L12.5938 11.4675L11.5413 13.5675L9.21875 13.92L7.1325 15L5.04625 13.92L2.72375 13.5675L1.67125 11.4675L0 9.8175L0.3825 7.5L0 5.1825L1.67125 3.5325L2.72375 1.4325L5.04625 1.08L7.1325 0Z'
				fill='#858585'
				style={{ fill: '#858585', fillOpacity: 1 }}
			/>
			<path
				d='M2.13257 14.7426V20.0001L7.13257 18.7501L12.1326 20.0001V14.7426L9.61007 15.1251L7.13257 16.4076L4.65507 15.1251L2.13257 14.7426Z'
				fill='#858585'
				style={{ fill: '#858585', fillOpacity: 1 }}
			/>
		</svg>
	)
}

export default Award
