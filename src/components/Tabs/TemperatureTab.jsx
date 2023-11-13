import React from 'react'
import GraphComp from './GraphComp'

export default function TemperatureTab({isEnabled}) {
  //className={`{tabPanes ${isEnabled ? '' : 'disableTab'} }`}
  return (
    <div className='tabPanes'>
      <div className={isEnabled ? '' : 'disableTab'} id='Temperature'> 
        Temperature
      </div>
      <div className='borderBottomLine'></div>
      <GraphComp data='From TemperatureTab'/>
    </div>
  )
}
