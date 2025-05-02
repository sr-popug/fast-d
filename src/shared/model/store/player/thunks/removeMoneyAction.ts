import { createAsyncThunk } from '@reduxjs/toolkit'
import { setNotice, Types } from '../../notice/notice.slice'
import { RootState } from '../../store'
import { removeMoney } from '../player.slice'

export const removeMoneyAction = createAsyncThunk<
  void,
  number,
  { state: RootState }
>('player/removeAction', (money: number, { dispatch, getState }) => {
  if (getState().player.money >= money) {
    dispatch(
      removeMoney({
        money,
      })
    )
  } else {
    dispatch(
      setNotice({
        header: 'Недостаточно средств',
        text: 'На вашем счёте недостаточно средств для совершения покупки',
        type: Types.error,
      })
    )
    console.log(1)
    throw new Error('недостаточно средств')
  }
})
