'use client'
import { RootState } from '@/shared/model/store/store'
import { useSelector } from 'react-redux'
import styles from './income.module.scss'
export default function Income() {
  const state = useSelector((state: RootState) => state.player)
  return (
    <article className={styles.income}>
      Доход:
      <span>
        {' '}
        {state.income}
        <span>$/сек</span>
      </span>
    </article>
  )
}
