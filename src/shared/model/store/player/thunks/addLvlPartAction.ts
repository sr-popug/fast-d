import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { addLvl, addLvlPart } from '../player.slice'

export const addLvlPartAction = createAsyncThunk<
  void,
  number,
  { state: RootState }
>('player/addLvlPart', (part: number, { dispatch, getState }) => {
  dispatch(
    addLvlPart({
      part,
    })
  )
  if (getState().player.lvlPart >= 1) {
    dispatch(addLvl())
  }
})
