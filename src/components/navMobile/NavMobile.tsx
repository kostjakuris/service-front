import React from 'react'
import styles from '@/components/homePage/header/header.module.scss'
import { ArrowRight } from 'lucide-react'
import Close from '../../../public/icons/Close'
import { motion } from 'framer-motion'
import navStyles from './nav-mobile.module.scss'

const NavMobile = ({ setIsNavbarOpen }: { setIsNavbarOpen: (isNavbarOpen: boolean) => void }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			className={navStyles.nav__mobile}
		>
			<button className='mr-[20px] ml-auto' onClick={() => setIsNavbarOpen(false)}>
				<Close />
			</button>
			<nav>
				<ul className={'flex flex-col items-center justify-center gap-[20px]'}>
					<li className={`text-big-regular text-dark-gray ${styles.header__nav_items}`}>
						Home
					</li>
					<li className={`text-big-regular text-light-gray ${styles.header__nav_items}`}>
						Services
					</li>
					<li className={`text-big-regular text-light-gray ${styles.header__nav_items}`}>
						Metaverse
					</li>
					<li className={`text-big-regular text-light-gray ${styles.header__nav_items}`}>
						Careers
					</li>
					<li className={`text-big-regular text-light-gray ${styles.header__nav_items}`}>
						Blog
					</li>
				</ul>
			</nav>
			<a
				className={'text-big-regular text-light-green mb-[20px] flex items-center'}
				href='/public'
			>
				Contact Us
				<ArrowRight className={'text-light-green ml-[12px]'} />
			</a>
		</motion.div>
	)
}

export default NavMobile
