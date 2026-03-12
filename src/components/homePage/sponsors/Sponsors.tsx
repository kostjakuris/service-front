import React from 'react'
import Axon from '../../../../public/icons/Axon'
import Jetstar from '../../../../public/icons/Jetstar'
import Expedia from '../../../../public/icons/Expedia'
import Quantas from '../../../../public/icons/Quantas'
import Alitalia from '../../../../public/icons/Alitalia'
import Link from 'next/link'
import styles from './sponsors.module.scss'

const Sponsors = () => {
	return (
		<section className={'my-[94px] flex w-full flex-wrap items-stretch justify-between'}>
			<Link className={styles.sponsors__link} target={'_blank'} href={'https://axon.com'}>
				<Axon />
			</Link>
			<Link className={styles.sponsors__link} target={'_blank'} href={'https://axon.com'}>
				<Jetstar />
			</Link>
			<Link className={styles.sponsors__link} target={'_blank'} href={'https://expedia.com'}>
				<Expedia />
			</Link>
			<Link className={styles.sponsors__link} target={'_blank'} href={'https://quantas.com'}>
				<Quantas />
			</Link>
			<Link className={styles.sponsors__link} target={'_blank'} href={'https://www.axon.com/'}>
				<Alitalia />
			</Link>
		</section>
	)
}

export default Sponsors
