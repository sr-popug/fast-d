'use client'
import { addMoney } from '@/shared/model/store/player/player.slice'
import { appDispatch, RootState } from '@/shared/model/store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function IncomeProvider() {
  const { income } = useSelector((state: RootState) => state.player)

  useEffect(() => {
    const id = setInterval(() => {
      appDispatch(
        addMoney({
          money: income,
        })
      )
    }, 1000)
    return () => clearInterval(id)
  }, [income])
  return null
}
