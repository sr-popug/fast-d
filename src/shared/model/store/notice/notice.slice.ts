import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Types {
  warning = 'warning',
  error = 'error',
  message = 'message',
  successful = 'successful',
}

type NoticeState = {
  id: number
  text: string
  header: string
  type: Types
}

const initialState = {
  id: 0,
  text: '',
  type: Types.message,
  header: '',
}

const NoticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    setNotice: (state, action: PayloadAction<Omit<NoticeState, 'id'>>) => {
      state.text = action.payload.text
      state.header = action.payload.header
      state.type = action.payload.type
      state.id += 1
    },
  },
})

export const { setNotice } = NoticeSlice.actions
export const noticeReducer = NoticeSlice.reducer
