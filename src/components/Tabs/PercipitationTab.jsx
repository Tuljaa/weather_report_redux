import React from 'react'
import GraphComp from './GraphComp'

export default function PercipitationTab({isEnabled}) {
  return (
   <div className='tabPanes'>
     <div className={isEnabled ? '' : 'disableTab'} id='Percipitation'> 
        Percipitation
        <div className='borderBottomLine'></div> 
      </div>
     {/* <GraphComp data='From TemperatureTab'/> */}
   </div>
  )
}
