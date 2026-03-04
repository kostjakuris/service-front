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

const Header = () => {
	const { isNavbarOpen } = useAppSelector((state) => state.app)
	const dispatch = useAppDispatch()
	const { selectedLanguage } = useAppSelector((state) => state.app)

	return (
		<div className={`content-container ${styles.header}`}>
			<a href='/'>
				<Logo />
			</a>
			<div className={'max-tablet:hidden flex items-center justify-between gap-[86px]'}>
				<nav>
					<ul className={'flex items-center justify-between gap-[55px]'}>
						<li className={`text-base-regular ${styles.header__nav_items}`}>Destinations</li>
						<li className={`text-base-regular mr-[9px] ${styles.header__nav_items}`}>
							Hotels
						</li>
						<li className={`text-base-regular mr-[7px] ${styles.header__nav_items}`}>
							Flights
						</li>
						<li className={`text-base-regular ${styles.header__nav_items}`}>Bookings</li>
					</ul>
				</nav>
				<div className={'flex items-center justify-between gap-[42px]'}>
					<button className={`mr-[10px] font-medium! ${styles.header__nav_items}`}>
						Login
					</button>
					<button className={styles.header__signUp_button}>Sign up</button>
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
				</div>
			</div>
			<button
				className={'max-tablet:block! hidden!'}
				onClick={() => dispatch(setIsNavbarOpen(true))}
			>
				<MobileMenu />
			</button>
			{isNavbarOpen && <NavMobile />}
		</div>
	)
}

export default Header
