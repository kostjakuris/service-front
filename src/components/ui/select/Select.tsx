import * as React from 'react'
import { Select, SelectChangeEvent } from '@mui/material'
import { ChevronDown } from 'lucide-react'

interface SelectProps {
	children: React.ReactNode
	value: string
	onValueChange: (event: SelectChangeEvent) => void
}

const UISelect = ({ children, value, onValueChange }: SelectProps) => (
	<Select
		labelId='simple-select-label'
		id='simple-select'
		name='language'
		disableUnderline
		variant='standard'
		value={value}
		IconComponent={ChevronDown}
		sx={{
			fontSize: '17px',
			fontFamily: 'var(--font-google-sans), sans-serif',
			fontWeight: '500',
			paddingTop: '4px',
			'@media (max-width:1023px)': {
				marginLeft: '12px',
				fontSize: '15px',
			},
			'@media (max-width:479px)': {
				fontSize: '13px',
				marginLeft: '14px',
			},
			'& .MuiSelect-icon': {
				color: '#212832FF',
				width: '20px',
				height: '20px',
				marginRight: '2px',
				'@media (max-width:1023px)': {
					width: '15px',
					height: '15px',
					marginRight: '8px',
				},
				'@media (max-width:479px)': {
					marginRight: '10px',
				},
			},
		}}
		MenuProps={{
			PaperProps: {
				sx: {
					borderRadius: '6px',
				},
			},
			MenuListProps: {
				sx: {
					paddingTop: 0,
					paddingBottom: 0,
					'& .MuiMenuItem-root.Mui-selected': {
						backgroundColor: 'var(--color-light-yellow) !important',
					},
					'& .MuiMenuItem-root.Mui-selected:hover': {
						backgroundColor: 'var(--color-light-yellow) !important',
					},
				},
			},
		}}
		onChange={onValueChange}
	>
		{children}
	</Select>
)

export default UISelect
