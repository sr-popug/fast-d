import { upgradeFactory } from '@/shared/model/store/factory/factory.slice'
import { addIncome } from '@/shared/model/store/player/player.slice'
import { addLvlPartAction } from '@/shared/model/store/player/thunks/addLvlPartAction'
import { removeMoneyAction } from '@/shared/model/store/player/thunks/removeMoneyAction'
import store, { appDispatch } from '@/shared/model/store/store'

export default function updateFactory(title: string) {
  const factory = store.getState().factory.find(el => el.name == title)!

  appDispatch(
    removeMoneyAction(
      factory.onUpgradeBoostPricePercent *
        factory.level *
        factory.startUpgradePrice
    )
  )
    .unwrap()
    .then(() => {
      console.log(2)
      appDispatch(addLvlPartAction(0.1))
      appDispatch(
        addIncome({
          income: factory.startIncome,
        })
      )
      appDispatch(upgradeFactory(factory))
    })
}
