'use client'
import { RootState } from '@/shared/model/store/store'
import { Lock } from 'lucide-react'
import { useSelector } from 'react-redux'
import styles from './card.module.scss'
export default function BlockedCard({ levelUnlock }: { levelUnlock: number }) {
  const state = useSelector((state: RootState) => state.player)
  if (levelUnlock <= state.lvl) {
    return null
  }
  return (
    <div className={styles.blocked}>
      <Lock width={40} height={40} />
      <p>Этот завод открывается на {levelUnlock} уровне</p>
    </div>
  )
}
