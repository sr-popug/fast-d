'use client'
import { Factory } from '@/entities'
import buyFactory from '@/features/buy-factory/buyFactory'
import updateFactory from '@/features/upgrade-factory/upgradeFactory'
import Image from 'next/image'
import BlockedCard from './BlockedCard'
import styles from './card.module.scss'
export default function Card({
  factory,
  type,
}: {
  factory: Factory
  type: 'not-buy' | 'my'
}) {
  let isNotBy = false

  if (type == 'not-buy') {
    isNotBy = true
  }
  const {
    name,
    image,
    income,
    price,
    onUpgradeBoostPricePercent,
    startUpgradePrice,
    level,
    levelUnlock,
  } = factory
  return (
    <article className={styles.card}>
      <Image src={image} width={300} height={300} alt={name} />
      <article className={styles.text}>
        <h3>{name}</h3>

        {!isNotBy && (
          <li>
            {level} <p>Уровень</p>
          </li>
        )}
        <li className={styles.income}>
          <p>Доход:</p>{' '}
          <span>
            {income}
            <span>$/сек</span>
          </span>
        </li>
        {!isNotBy && (
          <button onClick={() => updateFactory(factory.name)}>
            Улучшить за {onUpgradeBoostPricePercent * level * startUpgradePrice}
            $
          </button>
        )}
        {isNotBy && (
          <button onClick={() => buyFactory(factory.name)}>
            Купить за {price}$
          </button>
        )}
        <BlockedCard levelUnlock={levelUnlock} />
      </article>
    </article>
  )
}
