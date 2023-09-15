import React from 'react'
import CommonLogic from './CommonLogic'

const WrapperComp = (CommonLogic) => {
  return function wrapperComponent(...props){
    return (
        <div>
            WrapperComp
            <CommonLogic/>
        </div>
      )
  }
}
export default WrapperComp(CommonLogic) //To pass props to WrapperComp pass here 
