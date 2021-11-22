import React from 'react'
import Link from 'next/Link'
import styled from 'styled-components'

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <div className={`${toggle ? 'sidebar active' : 'sidebar hide'}`}>
      <div className='sidebar-center'>
        <img
          src='/assets/shared/icon-close.svg'
          onClick={() => setToggle(false)}
          alt=''
        />
        <ul className='side-links'>
          <li onClick={() => setToggle(false)}>
            <Link href='/'>
              <a>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  00
                </span>{' '}
                HOME
              </a>
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href='/destination'>
              <a>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  00
                </span>{' '}
                DESTINATION
              </a>
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href='/crew'>
              <a>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  00
                </span>{' '}
                CREW
              </a>
            </Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href='/technology'>
              <a>
                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                  00
                </span>{' '}
                TECHNOLOGY
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

const Side = styled.div`
  top: 0;
  min-height: 100vh;
  z-index: 999;
  position: absolute;
  width: 254px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  transition: right 0.3s ease-in-out;

  .active {
    right: 0 !important;
  }

  .hide {
    right: -100vw !important;
  }

  .sidebar-center {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    display: grid;
    position: relative;

    img {
      /* position: absolute;
      right: 5%;
      top: 5%;
      cursor: pointer; */
      justify-self: end;
      cursor: pointer;
    }

    .side-links {
      margin-top: 6rem;
      display: grid;
      row-gap: 2rem;
    }
  }

  @media screen and (min-width: 450px) and (max-width: 850px) {
    width: 50vw;
  }

  @media screen and (min-width: 860px) {
    display: none;
  }
`
