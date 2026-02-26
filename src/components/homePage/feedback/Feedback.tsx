import React from 'react'
import styles from './feedback.module.scss'

const Feedback = () => {
	return (
		<div className={'max-tablet:pb-[72px] pb-[144px]'}>
			<h2
				className={
					'text-heading-regular text-gray text-shadow-[0_4px_31px_rgba(0, 0, 0, 0.11)] mt-[94px] text-center'
				}
			>
				Feedback from our clients
			</h2>
			<p className={'text-extralarge-regular my-[29px] text-center leading-[105%] opacity-70'}>
				Our WORK speaks louder than our WORD. Find out how we helped clients overcome challenges
				and succeed.
			</p>
			<div
				className={
					'max-tablet:gap-[20px] max-mini-tablet:flex-col mt-[43px] flex items-stretch justify-between gap-[46px]'
				}
			>
				<div
					className={'max-tablet:hidden flex flex-col items-center justify-between gap-[17px]'}
				>
					<span className={'bg-light-green mb-[10px] h-[92px] w-[12px] rounded-[11px]'} />
					<span className={'bg-light-blue h-[32px] w-[12px] rounded-[11px]'} />
					<span className={'bg-light-blue h-[32px] w-[12px] rounded-[11px]'} />
					<span className={'bg-light-blue h-[32px] w-[12px] rounded-[11px]'} />
				</div>
				<div
					className={
						'flex-1 rounded-[10px] px-[19px] pt-[20px] pb-[39px] shadow-[0_2px_22px_5px_#0000001A]'
					}
				>
					<div className={'mb-[24px] flex items-center gap-[9px]'}>
						<img src='/images/avatar.png' alt='avatar' />
						<div>
							<p className={'max-tablet:text-[14px] text-[16px] leading-[133%]'}>Jhony D</p>
							<p className={'max-mobile:text-[11px] text-[12px] leading-[133%] opacity-60'}>
								@jhony_D
							</p>
						</div>
					</div>
					<p className={`text-large-regular ${styles.feedback__quote}`}>
						<span className={`${styles.feedback__quote_close}`} aria-hidden='true'>
							“
						</span>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
						pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure
						tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt{' '}
						<span className={'whitespace-nowrap'}>
							nisi.
							<span className={styles.feedback__quote_close} aria-hidden='true'>
								”
							</span>
						</span>
					</p>
				</div>
				<div
					className={
						'flex-1 rounded-[10px] px-[19px] pt-[20px] pb-[39px] shadow-[0_2px_22px_5px_#0000001A]'
					}
				>
					<div className={'mb-[24px] flex items-center gap-[9px]'}>
						<img src='/images/avatar.png' alt='avatar' />
						<div>
							<p className={'max-tablet:text-[14px] text-[16px] leading-[133%]'}>Jhony D</p>
							<p className={'max-mobile:text-[11px] text-[12px] leading-[133%] opacity-60'}>
								@jhony_D
							</p>
						</div>
					</div>
					<p className={`text-large-regular ${styles.feedback__quote}`}>
						<span className={`${styles.feedback__quote_close}`} aria-hidden='true'>
							“
						</span>
						Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
						pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure
						tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt{' '}
						<span className={'whitespace-nowrap'}>
							nisi.
							<span className={styles.feedback__quote_close} aria-hidden='true'>
								”
							</span>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Feedback
