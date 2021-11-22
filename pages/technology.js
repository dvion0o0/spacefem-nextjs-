import React, { useState } from 'react'
import styled from 'styled-components'
import Data from '../data.json'
import { motion, AnimatePresence } from 'framer-motion'

const Technology = () => {
  const [index, setIndex] = useState(0)

  return (
    <Wrapper>
      <div className='wrapper-center'>
        <h5>
          <span>03</span> Space launch 101
        </h5>
        <div className='content-container'>
          <div className='content-wrapper'>
            <div className='tabs-container'>
              {Data.technology.map((technology, i) => {
                return (
                  <button
                    key={i}
                    className={`${index === i ? 'active' : null}`}
                    onClick={() => setIndex(i)}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
            <div className='content'>
              <h5>THE TERMINOLOGY...</h5>
              <AnimatePresence exitBeforeEnter>
                <motion.h3
                  key={index}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.15 }}
                >
                  {Data.technology[index].name}
                </motion.h3>
                <motion.p
                  key={index}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.15 }}
                >
                  {Data.technology[index].description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <AnimatePresence exitBeforeEnter>
            <picture>
              <motion.source
                key={index}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
                media='(min-width:850px)'
                srcSet={Data.technology[index].portrait}
                width='400px'
              />
              <img src={Data.technology[index].landscape} />
            </picture>
          </AnimatePresence>
        </div>
      </div>
    </Wrapper>
  )
}

export default Technology

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  background: url('/assets/technology/background-technology-desktop.jpg')
    no-repeat center center;
  background-size: cover;
  display: grid;

  @media screen and (max-width: 450px) {
    background: url('/assets/technology/background-technology-mobile.jpg')
      no-repeat center center;
    background-size: cover;

    h5 {
      text-align: center;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 450px) and (max-width: 850px) {
    background: url('/assets/technology/background-technology-tablet.jpg')
      no-repeat center center;
    background-size: cover;
  }
  .wrapper-center {
    width: 80vw;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 0rem 0 2rem 0;
    display: grid;

    @media screen and (min-width: 850px)  and (max-width: 1200px) {
    width: 90vw;
    }

 @media screen and (min-width: 450px)  and (max-width: 850px) {
    width: 100vw;

    h5{
     padding-left: 2rem;
    }
    }

    @media screen and (max-width: 450px) {
    width : 100vw;
    }


    h5 {
      text-transform: uppercase;
      color: var(--white);
      padding-top:10rem;


      span {
        opacity: 25%;
        font-weight: 600;
      }
    }
.content-container{
 margin-top: 5rem;
  display: flex;
  justify-content: space-between;
}

.content-wrapper{
 flex: 0 0 60%;
 display: flex;
 justify-content: space-around;
}

.tabs-container{
 display: flex;
 flex-direction: column;

button{
 width: 80px;
 height: 80px;
 border-radius: 50%;
 margin-top: 1rem;
 border:0.5px solid rgba(255,255,255,0.3);
 background: none;
 color:var(--white);
 font-size: 32px;
 cursor: pointer;
transition: all .3s linear;
 &:hover{
 border:0.5px solid rgba(255,255,255,1);
 }
}

.active{
 background: var(--white);
 border:none;
 color: var(--black);
}

}

.content > h5{
 padding: 0;
 font-size: 16px;
}

.content h3{
 margin:1.5rem 0;
 text-transform: uppercase;
}

.content > p {
 width: 444px;
}

.content-container > picture{
transform: translate(35% , -10%);
}

@media screen and (min-width: 850px)  and (max-width: 1200px){

 .content-container{
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
 }
.content-wrapper{
 display: grid;
 grid-template-columns: auto 1fr;
 column-gap:1rem;
}

.content-container > picture{
 transform: translateX(10%);
}
}

@media screen and (min-width: 450px)  and (max-width: 850px){
.content-container{
display: grid;
margin-top: 0;
}

.content-container > picture{
transform: translate(0);
order: -1;
object-fit: cover;
}

.content-wrapper{
 display: grid;
 text-align:center;
 place-items: center;

}

.tabs-container{
flex-direction: row;
justify-content: center;
margin-bottom: 1rem;
}

.tabs-container > button{
 margin-left: 1rem;
}

.content > h3{
 font-size: 40px;
}

.content > p {
 width: 500px;
}

}

@media screen and (max-width: 450px) {
 .content-container{
display: grid;
margin-top: 2rem;
}

.content-container > picture{
transform: translate(0);
order: -1;
object-fit: cover;
width: 100vw;
}

.content-container > picture > img{
 width: 100vw;
}

.content-wrapper{
 display: grid;
 text-align:center;
 place-items: center;
 width: 90vw;
 margin:0 auto;
}

.tabs-container{
flex-direction: row;
justify-content: center;
margin-bottom: 1rem;
}

.tabs-container > button{
 margin-left: 1rem;
 width: 40px;
 height: 40px;
 font-size:16px;
}

.content > h3{
 font-size: 24px;
}

.content > h5{
font-size: 14px;
}

.content > p {
 width: 100%;
 font-size: 15px;
}
}

`
