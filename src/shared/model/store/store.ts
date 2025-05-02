import { configureStore } from '@reduxjs/toolkit'
import { factoryReducer } from './factory/factory.slice'
import { noticeReducer } from './notice/notice.slice'
import { playerReducer } from './player/player.slice'

const store = configureStore({
  reducer: {
    notice: noticeReducer,
    player: playerReducer,
    factory: factoryReducer,
  },
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const appDispatch = store.dispatch
