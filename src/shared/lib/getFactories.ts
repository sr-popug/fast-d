import store from '../model/store/store'
import factories from './factories'
export default function getFactories() {
  const factoriesState = store.getState().factory
  return factories
    .toSorted((a, b) => b.levelUnlock - a.levelUnlock)
    .filter(el => {
      return factoriesState.reduce((calc, el2) => {
        if (el2.name == el.name) {
          calc = false
        }
        return calc
      }, true)
    })
}
