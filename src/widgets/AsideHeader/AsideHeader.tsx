import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'

export default function AsideHeader() {
  return (
    <aside className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>
              <Image src={'/house.svg'} height={25} width={25} alt='house' />
              <p>Главная</p>
            </Link>
          </li>
          <li>
            <Link href={'/factories'}>
              <Image
                src={'/factory.svg'}
                height={30}
                width={30}
                alt='factory'
              />
              <p>Заводы</p>
            </Link>
          </li>
          <li>
            <Link href={'/shop'}>
              <Image src={'/store.svg'} height={30} width={30} alt='shop' />
              <p>Магазин</p>
            </Link>
          </li>

          {/* <li>
            <Link href={'/upgrades'}>
              <Image src={'/update.svg'} height={30} width={30} alt='update' />
              <p>Улучшения</p>
            </Link>
          </li> */}
          <li>
            <Link href={'/statistic'}>
              <Image
                src={'/statistics.svg'}
                height={30}
                width={30}
                alt='statistic'
              />
              <p>Статистика</p>
            </Link>
          </li>
        </ul>

        <div className={styles.line}></div>

        <ul>
          <li>
            <Link href={'/help'}>
              <Image src={'/lightbulb.svg'} height={30} width={30} alt='help' />
              <p>Помощь</p>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <Image src={'/phone.svg'} height={30} width={30} alt='phone' />
              <p>Связаться</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
