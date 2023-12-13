import React, { useRef } from 'react'

import useSearchComponent from './hooks/useSearchComponent';

export default function SearchComponent({ wrapperOnChange }) {
    const refInput = useRef(null)
    const refClose = useRef(null)

    const {
        searchOutcomes = {},

        handleChange,
        handleX,
        handleSearchClick
    } = useSearchComponent({refInput, refClose, wrapperOnChange});

  const displaySearchOutcomes = (outcomes) => {
    let metaData = [];
    metaData = Object.keys(outcomes).map((value, key) => {
      return (
        <h5 className='dropdownContent' 
          onClick={ () => handleSearchClick(value)} key={key}>
          {value} 
        </h5>
      )
    }
    )
    return metaData;
  }

  return (
    <>
        <input className='OutlinedInput' placeholder="Enter City Name"
            type="search" onChange={handleChange} ref={refInput}/>
    <div className='dropdown' >
    {
      (Object.keys(searchOutcomes).length !==0 ) ? displaySearchOutcomes(searchOutcomes) : null
    }
  </div>
      <button
          className='clear-input-button'
          aria-label="Clear input"
          title="Clear input"
          onClick={handleX}
          ref={refClose}
      >X</button>
    </>
  )
}
