'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './hero.module.scss'
import { ArrowRight } from 'lucide-react'
import Instagram from '../../../../public/icons/Instagram'
import Link from 'next/link'
import Twitter from '../../../../public/icons/Twitter'
import Facebook from '../../../../public/icons/Facebook'
import Title from '../../../../public/icons/Title'
import MenAndComputer from '../../../../public/icons/MenAndComputer'
import Bitcoin from '../../../../public/icons/Bitcoin'

const Hero = () => {
	const blockRef = useRef<HTMLDivElement>(null)
	const [pos, setPos] = useState({ top: 0, right: 0 })

	const updatePosition = () => {
		const block = blockRef.current
		if (!block) return

		const blockRect = block.getBoundingClientRect()
		setPos({
			top: blockRect.bottom - blockRect.height / 2.2,
			right: blockRect.left + blockRect.width / 1.2,
		})
	}

	useEffect(() => {
		updatePosition()
		window.addEventListener('resize', updatePosition)
		return () => {
			window.removeEventListener('resize', updatePosition)
		}
	}, [])
	return (
		<div className={styles.hero}>
			<div
				className={
					'max-tablet:justify-center max-tablet:flex-col flex' +
					' max-tablet:mx-auto items-center'
				}
			>
				<div className={'max-laptop:max-w-[55%] max-laptop:w-full max-tablet:max-w-full'}>
					<p className={styles.hero__sub_title}>A TRUSTED COMPANY</p>
					<h1 className={'mt-[6.5px] w-fit'}>
						<Title
							className={'max-laptop:max-w-full max-tablet:max-w-[90%] max-laptop:w-full'}
						/>
					</h1>
					<p className={`text-large-regular ${styles.hero__text}`}>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
						officia consequat duis enim{' '}
						<a className={'text-light-green underline'} href='/public'>
							velit mollit.
						</a>
					</p>
					<button className={`text-big-regular ${styles.hero__button}`}>
						Get Started <ArrowRight className={'w-[24px]'} />
					</button>
					<div className={'mt-[36px] mb-[52px] flex items-center gap-[18px]'}>
						<Link href='/'>
							<Twitter />
						</Link>
						<Link href='/'>
							<Facebook />
						</Link>
						<Link href='/'>
							<Instagram />
						</Link>
					</div>
				</div>
				<div ref={blockRef} className={'max-tablet:hidden h-[-webkit-fill-available] flex-1'}>
					<MenAndComputer className={'max-tablet:mx-auto h-full w-full'} />
				</div>
				<Bitcoin
					className={'max-laptop:hidden'}
					style={{
						position: 'absolute',
						top: pos.top,
						left: pos.right,
					}}
				/>
			</div>
			<div>
				<p className={styles.hero__trusted_text}>Trusted by 4,000+ companies</p>
				<div className={'mt-[10px] flex flex-wrap items-center justify-around'}>
					<img src='/images/spotify.png' alt='spotify' />
					<img src='/images/slack.png' alt='slack' />
					<img src='/images/dropbox.png' alt='dropbox' />
					<img src='/images/zoom.png' alt='zoom' />
				</div>
			</div>
		</div>
	)
}

export default Hero
