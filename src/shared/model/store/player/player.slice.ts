import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SetMoneyAction {
  money: number
}
interface AddLvlPartAction {
  part: number
}
interface AddIncomeAction {
  income: number
}

const initialState = {
  money: 0,
  lvl: 1,
  income: 0,
  lvlPart: 0,
  techs: [],
  factories: [],
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addMoney(state, action: PayloadAction<SetMoneyAction>) {
      state.money += action.payload.money
    },
    removeMoney(state, action: PayloadAction<SetMoneyAction>) {
      state.money -= action.payload.money
    },
    addLvlPart(state, action: PayloadAction<AddLvlPartAction>) {
      state.lvlPart += Number(action.payload.part.toFixed(1))
      state.lvlPart = Number(state.lvlPart.toFixed(1))
    },
    addIncome(state, action: PayloadAction<AddIncomeAction>) {
      state.income += action.payload.income
    },
    addLvl(state) {
      state.lvl += 1
      state.lvlPart = 0
    },
  },
})
export const { addMoney, removeMoney, addLvl, addIncome, addLvlPart } =
  playerSlice.actions
export const playerReducer = playerSlice.reducer
