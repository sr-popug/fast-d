import { Accid } from '@/app/layout'
import Image from 'next/image'
import styles from './logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={'/logo.svg'} width={40} height={40} alt='logo' />
      <p className={Accid.className}>FastDollar</p>
    </div>
  )
}
