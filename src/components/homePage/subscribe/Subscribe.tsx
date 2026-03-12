import React from 'react'
import styles from './subscribe.module.scss'
import Letter from '../../../../public/icons/Letter'
import BigSend from '../../../../public/icons/BigSend'
import SubscribePluses from '../../../../public/icons/SubscribePluses'

const Subscribe = () => {
	return (
		<section className={styles.subscribe}>
			<div className={styles.subscribe__sendIcon}>
				<BigSend />
			</div>
			<div className={'absolute -right-[99px] -bottom-[70px]'}>
				<SubscribePluses />
			</div>
			<h2 className={styles.subscribe__title}>
				Subscribe to get information, latest news and other interesting offers about Jadoo
			</h2>
			<div className={styles.subscribe__form}>
				<div className={'relative w-full max-w-[421px]'}>
					<div className={styles.subscribe__icon}>
						<Letter />
					</div>
					<input
						id='subscribe-email'
						className={styles.subscribe__input}
						type='email'
						placeholder='Your email'
					/>
				</div>
				<button className={styles.subscribe__btn} type='submit' aria-label='Subscribe'>
					Subscribe
				</button>
			</div>
		</section>
	)
}

export default Subscribe
