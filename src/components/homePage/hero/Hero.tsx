'use client'
import React from 'react'
import styles from './hero.module.scss'
import Tourist from '../../../../public/icons/Tourist'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div
				data-component='hero__info'
				className={'max-laptop:max-w-[50%] max-tablet:max-w-full h-full w-full max-w-[44%]'}
			>
				<p className={styles.hero__sub_title}>Best Destinations around the world</p>
				<h1 className={styles.hero__title}>
					Travel, <span className={styles.hero__title_line}>enjoy </span> and live a new and
					full life
				</h1>
				<p className={`text-base-regular ${styles.hero__text}`}>
					Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen
					it engrossed listening. Park gate sell they west hard for the.
				</p>
				<div
					data-component='hero__buttons'
					className={'max-mobile:gap-[25px] mt-[34px] flex items-center' + ' gap-[44px]'}
				>
					<button data-element='hero__button' className={styles.hero__button}>
						Find out more
					</button>
					<button
						data-element='hero__button'
						className={
							'max-tablet:text-[15px] max-mobile:text-[13px] flex cursor-pointer items-center gap-[21px] ' +
							' max-mobile:gap-[15px] text-[17px] font-medium whitespace-nowrap text-[#50555F]'
						}
					>
						<span data-element='hero__button_content' className={styles.hero__play_button}>
							<span className={styles.hero__triangle}></span>
						</span>
						Play Demo
					</button>
				</div>
			</div>
			<div
				data-component='hero__image'
				className={'max-laptop:max-w-[50%] max-tablet:hidden relative h-fit w-full max-w-[56%]'}
			>
				<Tourist className={'max-laptop:h-[600px]'} />
			</div>
		</section>
	)
}

export default Hero
