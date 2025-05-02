'use client'
import { RootState } from '@/shared/model/store/store'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './money.module.scss'
export default function Money() {
  const [difference, setDifference] = useState({
    minus: false,
    num: 0,
  })
  const { money } = useSelector((state: RootState) => state.player)
  const prevMoney = useRef(money)
  useEffect(() => {
    setDifference({
      num: Math.abs(prevMoney.current - money),
      minus: Math.abs(prevMoney.current - money) == prevMoney.current - money,
    })
    prevMoney.current = money
    const timeout = setTimeout(() => {
      setDifference({
        num: 0,
        minus: false,
      })
    }, 900)
    return () => clearTimeout(timeout)
  }, [money])
  return (
    <article className={styles.money}>
      {!!difference.num && (
        <motion.div
          style={{
            color: difference.minus ? '#FF3A3A' : '#15B200',
          }}
          animate={{
            scale: [0.5, 1, 1, 1],
            x: [10, 2, 2, 2],
            y: [-12, -6, -6, -6],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: 0.9,
            ease: 'easeInOut',
            times: [0, 0.5, 0.9, 1],
          }}
          className={styles.difference}
        >
          {difference.minus ? '- ' : '+ '}
          {difference.num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} $
        </motion.div>
      )}
      <Image src={'/money.svg'} width={30} height={30} alt='money' />
      <div className={styles.line}></div>
      <div className={styles.num}>
        {money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} $
      </div>
    </article>
  )
}
