'use client'
import { RootState } from '@/shared/model/store/store'
import { AnimatePresence, motion } from 'motion/react'
import { useSelector } from 'react-redux'
import styles from '../../factories.module.scss'
import Card from '../Card'

export default function MyFactories() {
  const factories = useSelector((state: RootState) => state.factory)
  return (
    <article className={styles.myFactories}>
      <h2>Ваши заводы</h2>

      <ul className={styles.flex}>
        <AnimatePresence>
          {!!factories.length &&
            factories.map(el => (
              <motion.li
                key={el.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Card type='my' factory={el} />
              </motion.li>
            ))}
          {!factories.length && (
            <div className={styles.notFound}>
              Похоже, у вас ещё нету заводов, купите свой первый завод ниже!
            </div>
          )}
        </AnimatePresence>
      </ul>
    </article>
  )
}
