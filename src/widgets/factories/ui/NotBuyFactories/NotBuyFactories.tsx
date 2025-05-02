'use client'
import factories from '@/shared/lib/factories'
import filterFactories from '@/shared/lib/filterFactories'
import { RootState } from '@/shared/model/store/store'
import { AnimatePresence, motion } from 'motion/react'
import { useSelector } from 'react-redux'
import styles from '../../factories.module.scss'
import Card from '../Card'

export default function NotBuyFactories() {
  const factoriesState = useSelector((state: RootState) => state.factory)

  return (
    <article className={styles.notByFactories}>
      <h2>Доступны к покупке</h2>

      <ul className={styles.flex}>
        <AnimatePresence>
          {filterFactories(factories, factoriesState).map(el => (
            <motion.li
              key={el.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Card type='not-buy' factory={el} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </article>
  )
}
