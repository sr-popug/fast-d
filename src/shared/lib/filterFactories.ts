import { Factory } from '@/entities'

export default function filterFactories(
  factories1: Factory[],
  factories2: Factory[]
) {
  return factories1
    .filter(el => {
      return factories2.reduce((calc, el2) => {
        if (el2.name == el.name) {
          calc = false
        }
        return calc
      }, true)
    })
    .toSorted((a, b) => a.levelUnlock - b.levelUnlock)
}
