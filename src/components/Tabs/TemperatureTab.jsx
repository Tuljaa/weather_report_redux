import React from 'react'
import GraphComp from './GraphComp'

export default function TemperatureTab({isEnabled}) {
  return (
    <>
      <div className={isEnabled ? '': 'disableTab'}> 
        <p className='tempText' id='Temperature'>Temperature</p>
      </div>
      { isEnabled && <GraphComp tabSelected='temperature' /> }
    </>
  )
}
