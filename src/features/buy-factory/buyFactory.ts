import getFactories from '@/shared/lib/getFactories'
import { addFactory } from '@/shared/model/store/factory/factory.slice'
import { setNotice, Types } from '@/shared/model/store/notice/notice.slice'
import { addIncome } from '@/shared/model/store/player/player.slice'
import { addLvlPartAction } from '@/shared/model/store/player/thunks/addLvlPartAction'
import { removeMoneyAction } from '@/shared/model/store/player/thunks/removeMoneyAction'
import { appDispatch } from '@/shared/model/store/store'

export default function buyFactory(title: string) {
  const factory = getFactories().find(el => el.name == title)!

  appDispatch(removeMoneyAction(factory.price))
    .unwrap()
    .then(() => {
      appDispatch(addFactory(factory))
      appDispatch(
        setNotice({
          header: 'Покупка прошла успешно',
          text: 'Фабрика успешно куплена',
          type: Types.successful,
        })
      )
      appDispatch(addLvlPartAction(0.2))
      appDispatch(
        addIncome({
          income: factory.income,
        })
      )
    })
}
