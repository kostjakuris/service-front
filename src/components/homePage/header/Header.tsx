'use client'
import React from 'react'
import styles from './header.module.scss'
import { ArrowRight } from 'lucide-react'
import MobileMenu from '../../../../public/icons/MobileMenu'
import NavMobile from '@/components/navMobile/NavMobile'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setIsNavbarOpen } from '@/lib/slice'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
	const { isNavbarOpen } = useAppSelector((state) => state.app)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const pathname = usePathname()
	return (
		<div className={styles.header}>
			<a href='/' className={'relative'}>
				<div
					className={
						'absolute top-0 left-1 z-[-1] h-[16px] w-[34px] rounded-[17px] bg-[#D1F0FF]'
					}
				/>
				<p className={styles.header__logo_text}>
					U N A D A . <span className={'text-[#C9C9C9]'}>|</span>
				</p>
			</a>
			<nav className={'max-tablet:hidden'}>
				<ul className={'flex items-center justify-between'}>
					<li
						onClick={() => router.push('/')}
						className={`${
							pathname === '/' ? 'text-dark-gray' : 'text-light-gray'
						} text-big-regular mr-[34px] ${styles.header__nav_items}`}
					>
						Home
					</li>
					<li
						onClick={() => router.push('/services')}
						className={`${
							pathname === '/services' ? 'text-dark-gray' : 'text-light-gray'
						} text-big-regular mr-[32px] ${styles.header__nav_items}`}
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
			<button
				className={'max-tablet:block hidden'}
				onClick={() => dispatch(setIsNavbarOpen(true))}
			>
				<MobileMenu />
			</button>
			{isNavbarOpen && <NavMobile />}
		</div>
	)
}

export default Header
