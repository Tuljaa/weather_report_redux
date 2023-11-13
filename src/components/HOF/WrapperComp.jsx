import React from 'react'
import Spinner from './Spinner'

const WrapperComp = (CommonLogic) => {
  return function ({data, isFetching}){
console.log(data, isFetching)
    if (isFetching) {
      return <Spinner />
    }
    else if (data == null) {
      return null
    } 
    else {
      return <CommonLogic data={data}/>
    }
  }
}
export default WrapperComp //To pass props to WrapperComp pass here 
