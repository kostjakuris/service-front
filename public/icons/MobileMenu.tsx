import React from 'react'
import { IconProps } from './Instagram'

const MobileMenu = ({ className, ...props }: IconProps) => {
	return (
		<svg
			{...props}
			width='40px'
			height='40px'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			id='menu-alt'
			className={`icon glyph ${className}`}
		>
			<path
				d='M21,19H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z'
				style={{ fill: '#000', opacity: 0.7 }}
			></path>
			<path
				d='M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z'
				style={{ fill: '#000', opacity: 0.7 }}
			></path>
			<path
				d='M21,7H3A1,1,0,0,1,3,5H21a1,1,0,0,1,0,2Z'
				style={{ fill: '#000', opacity: 0.7 }}
			></path>
		</svg>
	)
}

export default MobileMenu
