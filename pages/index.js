import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homecenter}>
        <AnimatePresence exitBeforeEnter>
          <div className={styles.homecontent}>
            <motion.h5
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              SO, YOU WANT TO TRAVEL TO
            </motion.h5>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              SPACE
            </motion.h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
              style={{ width: '25rem' }}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </motion.p>
          </div>
        </AnimatePresence>
        <div className={styles.homebutton}>
          <Link href='/destination' passHref>
            <button>EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
