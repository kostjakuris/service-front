'use client'
import React from 'react'
import styles from './header.module.scss'
import MobileMenu from '../../../../public/icons/MobileMenu'
import NavMobile from '@/components/navMobile/NavMobile'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setIsNavbarOpen, setSelectedLanguage } from '@/lib/slice'
import Logo from '../../../../public/icons/Logo'
import { MenuItem } from '@mui/material'
import UISelect from '@/components/ui/select/Select'
import Link from 'next/link'

const Header = () => {
	const { isNavbarOpen } = useAppSelector((state) => state.app)
	const dispatch = useAppDispatch()
	const { selectedLanguage } = useAppSelector((state) => state.app)

	return (
		<header className={styles.header}>
			<a href='/'>
				<Logo />
			</a>
			<nav className={'max-tablet:hidden flex items-center gap-[42px]'}>
				<ul className={'flex items-center gap-[55px]'}>
					<li className={`text-base-regular ${styles.header__nav_items}`}>
						<Link href={'/'}>Destinations</Link>
					</li>
					<li className={`text-base-regular mr-[9px] ${styles.header__nav_items}`}>
						<Link href={'/'}>Hotels</Link>
					</li>
					<li className={`text-base-regular mr-[7px] ${styles.header__nav_items}`}>
						<Link href={'/'}>Flights</Link>
					</li>
					<li className={`text-base-regular ${styles.header__nav_items}`}>
						<Link href={'/'}>Bookings</Link>
					</li>
				</ul>
				<Link
					href={'/'}
					className={`mr-[10px] ml-[44px] font-medium! ${styles.header__nav_items}`}
				>
					Login
				</Link>
				<Link href={'/'} className={styles.header__signUp_button}>
					Sign up
				</Link>
				<UISelect
					value={selectedLanguage}
					onValueChange={(event) => dispatch(setSelectedLanguage(event.target.value))}
				>
					<MenuItem
						sx={{
							fontSize: '17px',
							fontFamily: 'var(--font-google-sans)',
						}}
						value={'en'}
					>
						EN
					</MenuItem>
					<MenuItem
						sx={{
							fontSize: '17px',
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
			</nav>
			<button
				aria-label='Open menu'
				className={'max-tablet:block! hidden!'}
				onClick={() => dispatch(setIsNavbarOpen(true))}
			>
				<MobileMenu />
			</button>
			{isNavbarOpen && <NavMobile />}
		</header>
	)
}

export default Header
