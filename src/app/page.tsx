'use client'
import Factories from '@/widgets/factories/Factories'
import styles from './page.module.scss'
export default function MainPage() {
  return (
    <article className={styles.page}>
      <Factories />
    </article>
  )
}
