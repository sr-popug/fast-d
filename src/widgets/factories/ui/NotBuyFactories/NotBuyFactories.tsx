'use client'
import factories from '@/shared/lib/factories'
import filterFactories from '@/shared/lib/filterFactories'
import { RootState } from '@/shared/model/store/store'
import { useSelector } from 'react-redux'
import styles from '../../factories.module.scss'
import Card from '../Card'
export default function NotBuyFactories() {
  const factoriesState = useSelector((state: RootState) => state.factory)

  return (
    <article className={styles.notByFactories}>
      <h2>Доступны к покупке</h2>
      <ul className={styles.flex}>
        {filterFactories(factories, factoriesState).map(el => (
          <li key={el.name}>
            <Card type='not-buy' factory={el} />
          </li>
        ))}
      </ul>
    </article>
  )
}
