import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import icon from '../public/assets/shared/icon-hamburger.svg'

const Navbar = ({ toggle, setToggle }) => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div className={styles.navcenter}>
        {' '}
        <Link href='/' onClick={() => setToggle(false)}>
          <Image
            src='/assets/shared/logo.svg'
            width='48px'
            height='48px'
            alt='logo'
          />
        </Link>
        <ul className={styles.navlinks}>
          <li>
            <Link href='/'>
              <a
                className={
                  router.pathname == '/' ? styles.active : styles.navlink
                }
              >
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  00
                </span>{' '}
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href='/destination'>
              <a
                className={
                  router.pathname == '/destination'
                    ? styles.active
                    : styles.navlink
                }
              >
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  01
                </span>{' '}
                DESTINATION
              </a>
            </Link>
          </li>
          <li>
            <Link href='/crew'>
              <a
                className={
                  router.pathname == '/crew' ? styles.active : styles.navlink
                }
              >
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  02
                </span>{' '}
                CREW
              </a>
            </Link>
          </li>
          <li>
            <Link href='/technology'>
              <a
                className={
                  router.pathname == '/technology'
                    ? styles.active
                    : styles.navlink
                }
              >
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  03
                </span>{' '}
                TECHNOLOGY
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.toggle}>
          <Image
            src={icon}
            alt='toggle'
            onClick={() => setToggle(!toggle)}
          ></Image>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
