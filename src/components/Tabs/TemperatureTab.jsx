import React from 'react'
import GraphComp from './GraphComp'

export default function TemperatureTab({isEnabled}) {
  return (
    <div className='tabPanes'>
      <div className={isEnabled ? '' : 'disableTab'} id='Temperature'> 
        Temperature
      </div>
      <div className='borderBottomLine'></div>
      { isEnabled && <GraphComp tabSelected='temperature' /> }
    </div>
  )
}
