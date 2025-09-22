import styles from './shop.module.scss'
import MyUpgrades from './ui/MyUpgrades/MyUpgrades'
import NotBuyUpgrades from './ui/NotBuyUpgrades/NotBuyUpgrades'
export default function Shop() {
  return (
    <article clac sName={styles.shop}>
      <h1>Магазин</h1>
      <MyUpgrades />
      <NotBuyUpgrades />
    </article>
  )
}
