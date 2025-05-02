import { Factory } from '@/entities'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FactoryState = Factory

const initialState: FactoryState[] = []

const FactorySlice = createSlice({
  name: 'factory',
  initialState,
  reducers: {
    addFactory: (state, action: PayloadAction<FactoryState>) => {
      state.push(action.payload)
    },
    upgradeFactory: (state, action: PayloadAction<FactoryState>) => {
      const factory = state.find(el => el.name == action.payload.name)!
      factory.level += 1
      factory.income += factory.startIncome
    },
  },
})

export const { addFactory, upgradeFactory } = FactorySlice.actions
export const factoryReducer = FactorySlice.reducer
