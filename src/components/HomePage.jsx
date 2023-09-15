import React, { useRef } from 'react'
import Weather from './Weather';
import useHomePage from './hooks/useHomePage';
import ErrorFunc from "./ErrorComp/ErrorFunc";

export default function HomePage() {
    const refInput = useRef(null)
    const refClose = useRef(null)
    const {
        data,
        err,
        clearError,
        handleX,
        handleChange,
    } = useHomePage({refInput, refClose});
    console.log({err})

  return (
    <>
        {/* <h3> Using DEBOUNCE </h3> */}
       <div className='containerOfInput'>
        <input className='OutlinedInput' placeholder="Enter City Name"
                type="search" onChange={handleChange} ref={refInput}/>

            <button
                className='clear-input-button'
                aria-label="Clear input"
                title="Clear input"
                onClick={handleX}
                ref={refClose}
            >X</button>
       </div>
        { err ? <ErrorFunc error={err} clearError={clearError}/> : null}
        {( (data!==null) ? <Weather data={data?.main}/> : null ) }
    </>
  )
}
