import React, { useRef } from 'react'
import { map } from 'ramda';

import Weather from './Weather';
import useHomePage from './hooks/useHomePage';
import ErrorFunc from "./ErrorComp/ErrorFunc";

const HomePage = () => {
    const refInput = useRef(null)
    const refClose = useRef(null)
    const {
        data,
        searchOutcomes,
        err,
        isFetching,
        clearError,
        handleX,
        handleChange,
        handleSearchClick
    } = useHomePage({refInput, refClose});
    console.log({err})

    console.log('searchOutcomes::::::::', searchOutcomes);

  return (
    <>
        {/* <h3> Using DEBOUNCE </h3> */}
       <div className='containerOfInput'>
        <input className='OutlinedInput' placeholder="Enter City Name"
                type="search" onChange={handleChange} ref={refInput}/>
        <div className='dropdown' >
          {
            searchOutcomes && map(( value, key ) => {
              return <h5 className='dropdownContent' onClick={ () => handleSearchClick(value)} key={key}> {value} </h5>
            }, searchOutcomes)
          }
        </div>
            <button
                className='clear-input-button'
                aria-label="Clear input"
                title="Clear input"
                onClick={handleX}
                ref={refClose}
            >X</button>
       </div>
        { err ? <ErrorFunc error={err} clearError={clearError}/> : null}
        <Weather data={data?.main} isFetching={isFetching}/>
    </>
  )
}

export default HomePage;
