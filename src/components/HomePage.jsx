import React from 'react'

import Weather from './Weather';
import useHomePage from './hooks/useHomePage';
import ErrorFunc from "./ErrorComp/ErrorFunc";
import Tabs from "./Tabs/Tabs";
import SearchComponent from './SearchComponent';

const HomePage = () => {
    const {
        data,
        err,
        isFetching,

        clearError,
		wrapperOnChange
    } = useHomePage();

  return (
    <>
       <div className='containerOfInput'>
          <SearchComponent wrapperOnChange= { wrapperOnChange }/>
       </div>
        { err ? <ErrorFunc error={err} clearError={clearError}/> : null}
        <Weather data={data?.main} isFetching={isFetching}/>
        {
          data && <>
            <Tabs /> 
          </>
        }
    </>
  )
}

export default HomePage;
