'use client'
import { RootState } from '@/shared/model/store/store'
import { useSelector } from 'react-redux'
import styles from '../../factories.module.scss'
import Card from '../Card'
export default function MyFactories() {
  const factories = useSelector((state: RootState) => state.factory)
  return (
    <article className={styles.myFactories}>
      <h2>Ваши заводы</h2>
      <ul className={styles.flex}>
        {!!factories.length &&
          factories.map(el => (
            <li key={el.name}>
              <Card type='my' factory={el} />
            </li>
          ))}
        {!factories.length && (
          <div className={styles.notFound}>
            Похоже, у вас ещё нету заводов, купите свой первый завод ниже!
          </div>
        )}
      </ul>
    </article>
  )
}
