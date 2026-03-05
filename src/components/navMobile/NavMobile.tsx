'use client'
import React from 'react'
import styles from '@/components/homePage/header/header.module.scss'
import Close from '../../../public/icons/Close'
import { motion } from 'framer-motion'
import navStyles from './nav-mobile.module.scss'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setIsNavbarOpen, setSelectedLanguage } from '@/lib/slice'
import UISelect from '@/components/ui/select/Select'
import { MenuItem } from '@mui/material'
import Link from 'next/link'

const NavMobile = () => {
	const dispatch = useAppDispatch()
	const { selectedLanguage } = useAppSelector((state) => state.app)
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			className={navStyles.nav__mobile}
		>
			<button className='mr-[20px] ml-auto' onClick={() => dispatch(setIsNavbarOpen(false))}>
				<Close />
			</button>
			<nav>
				<ul className={'flex flex-col items-center justify-center gap-[20px]'}>
					<li className={`text-base-regular ${styles.header__nav_items}`}>
						<Link href={'/'}>Destinations</Link>
					</li>
					<li className={`text-base-regular ${styles.header__nav_items}`}>
						<Link href={'/'}>Hotels</Link>
					</li>
					<li className={`text-base-regular ${styles.header__nav_items}`}>
						<Link href={'/'}>Flights</Link>
					</li>
					<li className={`text-base-regular ${styles.header__nav_items}`}>
						<Link href={'/'}>Bookings</Link>
					</li>
				</ul>
			</nav>
			<div className={'flex flex-col items-center justify-center gap-[20px]'}>
				<UISelect
					value={selectedLanguage}
					onValueChange={(event) => dispatch(setSelectedLanguage(event.target.value))}
				>
					<MenuItem
						sx={{
							fontSize: '13px',
							fontFamily: 'var(--font-google-sans)',
						}}
						value={'en'}
					>
						EN
					</MenuItem>
					<MenuItem
						sx={{
							fontSize: '13px',
							fontFamily: 'var(--font-google-sans)',
							'&:hover': {
								backgroundColor: 'rgb(28 118 210 / 22%)',
							},
						}}
						value={'ru'}
					>
						RU
					</MenuItem>
				</UISelect>
				<Link href={'/'} className={styles.header__nav_items}>
					Login
				</Link>
				<Link href={'/'} className={styles.header__signUp_button}>
					Sign up
				</Link>
			</div>
		</motion.div>
	)
}

export default NavMobile
