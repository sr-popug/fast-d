interface Factory {
  name: string
  price: number
  image: string
  income: number
  startIncome: number
  onUpgradeBoostPricePercent: number //процент увелечения цены с каждым уровнем (не процент а часть типо не 200% а 2)

  onUpgradeBoostIncome: number
  startUpgradePrice: number // начальная цена улучшения
  level: number
  levelUnlock: number
}
export type { Factory }
