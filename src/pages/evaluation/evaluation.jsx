/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardsContainer from './CardsContainer'


const Evaluation = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <main className='lg:col-span-10 xl:col-span-11'>
        <CardsContainer />
      </main>
    </div>
  )
}

export default Evaluation