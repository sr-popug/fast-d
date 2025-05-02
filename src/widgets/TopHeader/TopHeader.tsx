import Logo from '@/shared/ui/Logo/Logo'
import styles from './header.module.scss'
import Income from './ui/Income/Income'
import Lvl from './ui/Lvl/Lvl'
import Money from './ui/Money/Money'

export default function TopHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Logo />
        <Money />
        <Income />
      </div>
      <div className='right'>
        <Lvl />
      </div>
    </header>
  )
}
