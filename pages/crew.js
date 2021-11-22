import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Data from '../data.json'
import { motion, AnimatePresence } from 'framer-motion'

const Crew = () => {
  const [index, setIndex] = useState(0)
  return (
    <Wrapper>
      <div className='wrapper-center'>
        <h5>
          <span>02</span> Meet Your Crew
        </h5>
        <div className='content-container'>
          <div className='content'>
            <AnimatePresence exitBeforeEnter>
              <motion.h4
                key={index}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {' '}
                {Data.crew[index].role}
              </motion.h4>
              <motion.h3
                key={index}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {' '}
                {Data.crew[index].name}
              </motion.h3>

              <motion.p
                key={index}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {Data.crew[index].bio}
              </motion.p>
            </AnimatePresence>
            <div className='dots-container'>
              {Data.crew.map((crew, i) => {
                return (
                  <button
                    key={i}
                    className={`${index === i ? 'active' : null}`}
                    onClick={() => setIndex(i)}
                  ></button>
                )
              })}
            </div>
          </div>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={index}
              src={Data.crew[index].image}
              width='400px'
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </Wrapper>
  )
}

export default Crew

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('/assets/crew/background-crew-desktop.jpg')
    no-repeat center center;
  background-size: cover;
  display: grid;

@media screen and (max-width: 450px) {
  background: url('/assets/crew/background-crew-mobile.jpg')  no-repeat center center;
   background-size: cover;

   h5{
     text-align:center;
     font-size: 16px;
   }
}

@media screen and (min-width: 450px) and (max-width: 850px) {
  background: url('/assets/crew/background-crew-tablet.jpg')  no-repeat center center;
   background-size: cover;
}


  .wrapper-center {
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100%;
    padding: 0rem 0 0rem 0;
    display: grid;

    h5 {
      text-transform: uppercase;
      color: var(--white);
      padding-top:10rem;

      span {
        opacity: 25%;
        font-weight: 600;
      }
    }

    .content-container {
      /* margin-top: 6rem; */
      display: flex;
      justify-content: space-between;

      /* align-items: center; */

@media screen and (max-width: 450px) {
 display: grid;
 place-items: center;
 row-gap: 2rem;
margin-top:10rem;
 margin: 1.5rem auto 0 auto;

 img{
   width: 180px;
   height: 180px;
   border-bottom: 1px solid var(--white);
 }

 .content{
  order: 1;
   text-align:center;


h4{
 font-size: 16px;
}

   h3{
     font-size: 24px;
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
 margin: 0rem auto 0 auto;

 img{
   width: 300px;
   height: 300px;
 }

 .content{
   text-align:center;
   flex:1;
   padding: 0;

   h4{
    font-size: 23px;
   }

   h3{
     font-size: 40px;
   }
 }

}

      .content {
       display:grid;
        flex: 0 0 55%;
        padding: 5rem 0;
       
        @media screen and (max-width: 450px) {
       padding: 0;

        }

      h4{
       color: rgba(255,255,255,0.5);
       margin-bottom: 1rem;
       text-transform: uppercase;

          @media screen and (max-width: 450px) {
         order: 1;
         margin-top: 2rem;
      }
      }
      h3{
        text-transform: uppercase;
        margin-bottom: 2rem;

           @media screen and (max-width: 450px) {
         width: 100%;
         order: 2;
         
      }
      }
      p{
        margin-bottom: 3rem;
        width: 444px;


        @media screen and (max-width: 450px) {
         width: 100%;
         order: 3;
         
      }
    }

    .dots-container{
     display: flex;
     button{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: none;
      outline: none;
      background: rgba(255,255,255,0.3);
      border:none;
      margin-left: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover{
       background: rgba(255,255,255,0.5);
     }
    }
    .active{
     background: white;
    }

@media screen and (max-width: 450px) {
 justify-content: center;
}

@media screen and (min-width: 450px) and (max-width: 850px) {
justify-content: center;
}

    }`
