import styles from './factories.module.scss'
import MyFactories from './ui/MyFactories/MyFactories'
import NotBuyFactories from './ui/NotBuyFactories/NotBuyFactories'
export default function Factories() {
  return (
    <article className={styles.factories}>
      <h1>Заводы</h1>
      <MyFactories />
      <NotBuyFactories />
    </article>
  )
}
