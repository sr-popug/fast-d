'use client'
import { RootState } from '@/shared/model/store/store'
import { useSelector } from 'react-redux'
import styles from './lvl.module.scss'
export default function Lvl() {
  const { lvl, lvlPart } = useSelector((state: RootState) => state.player)
  return (
    <article className={styles.level}>
      <div className={styles.lvl}>
        {lvl} <span>lvl</span>
      </div>
      <div className={styles.progress}>
        <div style={{ width: lvlPart * 100 + '%' }} className={styles.value}>
          {lvlPart > 0.05 ? lvlPart * 100 + '%' : ''}
        </div>
      </div>
    </article>
  )
}
