import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Data from '../data.json'
import { motion, AnimatePresence } from 'framer-motion'

const Destination = () => {
  const [index, setIndex] = useState(0)
  return (
    <Wrapper>
      <div className='wrapper-center'>
        <h5>
          <span>01</span> Pick your destination
        </h5>
        <div className='content-container'>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={index}
              src={Data.destinations[index].image}
              width={'445px'}
              height={'445px'}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            />
          </AnimatePresence>
          <div className='content'>
            <div className='tabs-container'>
              {Data.destinations.map((destination, i) => {
                return (
                  <h5
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`${index === i && 'active'}`}
                  >
                    {destination.name}
                  </h5>
                )
              })}
            </div>
            <AnimatePresence exitBeforeEnter>
              <motion.h2
                key={index}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {Data.destinations[index].name}
              </motion.h2>
              <motion.p
                key={index}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {Data.destinations[index].description}
              </motion.p>
              <hr style={{ color: 'rgba(255,255,255,0.5)' }} />
              <div className='details-container'>
                <div className='detail'>
                  <p>AVG. DISTANCE</p>
                  <motion.h5
                    key={index}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.15 }}
                  >
                    {Data.destinations[index].distance}
                  </motion.h5>
                </div>
                <div className='detail'>
                  <p>EST. TRAVEL TIME</p>
                  <motion.h5
                    key={index}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.15 }}
                  >
                    {Data.destinations[index].travel}
                  </motion.h5>
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Destination

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('/assets/destination/background-destination-desktop.jpg')
    no-repeat center center;
  background-size: cover;
  display: grid;

@media screen and (max-width: 450px) {
  background: url('/assets/destination/background-destination-mobile.jpg')  no-repeat center center;
   background-size: cover;

   h5{
     text-align:center;
     font-size: 16px;
   }
}

@media screen and (min-width: 450px) and (max-width: 850px) {
  background: url('/assets/destination/background-destination-tablet.jpg')  no-repeat center center;
   background-size: cover;
}


  .wrapper-center {
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
    padding: 8rem 0;
    display: grid;

    h5 {
      text-transform: uppercase;
      color: var(--white);


      span {
        opacity: 25%;
        font-weight: 600;
      }
    }

    .content-container {
      margin-top: 4.5rem;
      display: flex;
      justify-content: space-around;
      /* align-items: center; */

@media screen and (max-width: 450px) {
 display: grid;
 place-items: center;
 row-gap: 2rem;
margin-top:10rem;
 width: 60vw;
 margin: 1.5rem auto 0 auto;

 img{
   width: 180px;
   height: 180px;
 }

 .content{
   text-align:center;

   h2{
     font-size: 50px;
   }

   p{
     font-size: 15px;
   }
 }
}

@media screen and (min-width: 450px) and (max-width: 850px) {
 display: grid;
 place-items: center;
 row-gap: 2rem;
margin-top:10rem;
 width: 60vw;
 margin: 4.5rem auto 0 auto;

 img{
   width: 300px;
   height: 300px;
 }

 .content{
   text-align:center;

   h2{
     font-size: 80px;
   }
 }

}
      .content {
        flex: 0 0 40%;
        /* margin-left: 8rem; */
  
        .tabs-container {
          display: flex;
         justify-content: space-between;
          height: 30px;
          align-items: center;
          margin-bottom: 2rem;

          h5 {
            font-size: var(--tab-text-size);
            letter-spacing: var(--tab-letter);
            cursor: pointer;
            color: var(--lightViolet);
            padding-bottom: 0.5rem;
            transition: all 0.3s ease-in-out;

            &:hover {
              border-bottom:2px solid rgba(255,255,255,0.5);
          }
        }
        .active{
          color: var(--white);
         border-bottom:2px solid rgba(255,255,255,1);
        }
      }
      h2{
        text-transform: uppercase;
      }
      p{
        margin-bottom: 3rem;
      }

      .details-container{
        display:flex;
        justify-content: space-around;
        margin-top: 2rem;

        .detail{
          display: flex;
          flex-direction: column;

          p{
            margin-bottom: 0;
          }
        }
      }
    }
  }
`
