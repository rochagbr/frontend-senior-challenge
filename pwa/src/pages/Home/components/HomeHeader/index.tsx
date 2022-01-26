import { FunctionComponent } from 'react'
import styles from './homeHeader.module.scss'
import Logo from '@shared/assets/tudo-logo.png'
import { AiOutlineBell } from 'react-icons/ai'
import { IoChevronDownOutline } from 'react-icons/io5'
import clsx from 'clsx'

export const HomeHeader: FunctionComponent = () => {
  return (
    <header className={styles.root}>
      <div className={styles.top}>
        <img src={Logo} className={styles.logo} />
        <AiOutlineBell size={22} color="#fff" />
      </div>
      <div className={styles.content}>
        <h3 className={clsx('tp-head_3', styles.salutation)}>
          Olá, José Carlos
        </h3>
        <div className="tp-body_2">Seu crédito disponível é de</div>
        <div className={clsx('tp-head_1', styles.balance)}>R$ 5.048,10</div>
      </div>
      <button className={styles.showMore}>
        <IoChevronDownOutline size={24} color="#fff" />
      </button>
    </header>
  )
}