'use client'
import { setNotice, Types } from '@/shared/model/store/notice/notice.slice'
import { AppDispatch, RootState } from '@/shared/model/store/store'
import * as motion from 'motion/react-client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import switchColor from '../model/switchColor'
import styles from './notice.module.scss'
export default function Notice() {
  const { header, text, type } = useSelector((state: RootState) => state.notice)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(
        setNotice({
          header: '',
          text: '',
          type: Types.message,
        })
      )
    }, 5000)
    return () => clearTimeout(id)
  }, [text, dispatch])
  return (
    <div className={styles.container}>
      {text && (
        <motion.div
          animate={{
            x: [300, 0, 0, 300],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.1, 0.9, 1],
          }}
          className={styles.notice}
        >
          <div style={switchColor(type)} className={styles.line}></div>
          <div className={styles.text}>
            <h5>{header}</h5>
            <p>{text}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
