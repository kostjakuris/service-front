'use client'
import React, { useState } from 'react'
import styles from './header.module.scss'
import { ArrowRight } from 'lucide-react'
import MobileMenu from '../../../../public/icons/MobileMenu'
import NavMobile from '@/components/navMobile/NavMobile'

const Header = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false)
	return (
		<div className={styles.header}>
			<div className={'relative'}>
				<div
					className={
						'absolute top-0 left-1 z-[-1] h-[16px] w-[34px] rounded-[17px] bg-[#D1F0FF]'
					}
				/>
				<p className={styles.header__logo_text}>
					U N A D A . <span className={'text-[#C9C9C9]'}>|</span>
				</p>
			</div>
			<nav className={'max-tablet:hidden'}>
				<ul className={'flex items-center justify-between'}>
					<li
						className={`text-big-regular text-dark-gray mr-[34px] ${styles.header__nav_items}`}
					>
						Home
					</li>
					<li
						className={`text-big-regular text-light-gray mr-[32px] ${styles.header__nav_items}`}
					>
						Services
					</li>
					<li
						className={`text-big-regular text-light-gray mr-[43px] ${styles.header__nav_items}`}
					>
						Metaverse
					</li>
					<li
						className={`text-big-regular text-light-gray mr-[34px] ${styles.header__nav_items}`}
					>
						Careers
					</li>
					<li className={`text-big-regular text-light-gray ${styles.header__nav_items}`}>
						Blog
					</li>
				</ul>
			</nav>
			<a
				className={'text-big-regular max-tablet:hidden text-light-green flex items-center'}
				href='/public'
			>
				Contact Us
				<ArrowRight className={'text-light-green ml-[12px]'} />
			</a>
			<button className={'max-tablet:block hidden'} onClick={() => setIsNavbarOpen(true)}>
				<MobileMenu />
			</button>
			{isNavbarOpen && <NavMobile setIsNavbarOpen={setIsNavbarOpen} />}
		</div>
	)
}

export default Header
