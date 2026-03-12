import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
import Facebook from '../../../public/icons/Facebook'
import Instagram from '../../../public/icons/Instagram'
import Twitter from '../../../public/icons/Twitter'
import GooglePlay from '../../../public/icons/GooglePlay'
import Apple from '../../../public/icons/Apple'

const companyLinks = ['About', 'Careers', 'Mobile']
const contactLinks = ['Help/FAQ', 'Press', 'Affiliates']
const moreLinks = ['Airlinefees', 'Airline', 'Low fare tips']

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div className={'w-full max-w-[207px]'}>
					<h2 className={styles.footer__title}>Jadoo.</h2>
					<p className={styles.footer__tagline}>
						Book your trip in minute, get full Control for much longer.
					</p>
				</div>
				<div className={styles.footer__nav}>
					<h4 className={styles.footer__heading}>Company</h4>
					<ul className={styles.footer__links}>
						{companyLinks.map((link) => (
							<li key={link}>
								<Link href='#' className={`${styles.footer__link} text-big-regular`}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.footer__nav}>
					<h4 className={styles.footer__heading}>Contact</h4>
					<ul className={styles.footer__links}>
						{contactLinks.map((link) => (
							<li key={link}>
								<Link href='#' className={`${styles.footer__link} text-big-regular`}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.footer__nav}>
					<h4 className={styles.footer__heading}>More</h4>
					<ul className={styles.footer__links}>
						{moreLinks.map((link) => (
							<li key={link}>
								<Link href='#' className={`${styles.footer__link} text-big-regular`}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.footer__social_col}>
					<div className={styles.footer__socials}>
						<Link
							href='#'
							className={`${styles.footer__social_icon} px-[20px]`}
							aria-label='Facebook'
						>
							<Facebook />
						</Link>
						<Link
							href='#'
							className={`${styles.footer__social_instagramIcon} px-[15px]`}
							aria-label='Instagram'
						>
							<Instagram />
						</Link>
						<Link
							href='#'
							className={`${styles.footer__social_icon} px-[15px]`}
							aria-label='Twitter'
						>
							<Twitter />
						</Link>
					</div>
					<p className={styles.footer__discover}>Discover our app</p>
					<div className={styles.footer__badges}>
						<a href='#' className={styles.footer__badge}>
							<div>
								<GooglePlay />
							</div>
							<div className={'flex flex-col'}>
								<span className={styles.footer__badge_large}>GET IT ON</span>
								<span className={styles.footer__badge_small}>Google Play</span>
							</div>
						</a>
						<a href='#' className={`${styles.footer__badge} py-[8.5px]!`}>
							<div>
								<Apple />
							</div>
							<div className={'flex flex-col gap-[1px]'}>
								<span
									className={
										'text-[7px] leading-[100%] font-bold -tracking-[0.03em] text-white'
									}
								>
									Available on the
								</span>
								<span className={`${styles.footer__badge_large} text-[12px]!`}>
									Apple Store
								</span>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.footer__bottom}>
				<p className={styles.footer__copyright}>All rights reserved&copy;jadoo.co</p>
			</div>
		</footer>
	)
}

export default Footer
