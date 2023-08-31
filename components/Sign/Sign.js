import React from 'react'
import { useGlobalContext } from '../../context'
export default function Sign() {
  const { dest, setDest } = useGlobalContext()
  return (
    <div className={`${dest ? 'sign' : 'sign-null'}`}>
      <div className='sign-container'>
        <button>sign in </button> <br />
        <button className='int-btn' onClick={() => setDest(false)}>
          not intrested
        </button>
      </div>
    </div>
  )
}
