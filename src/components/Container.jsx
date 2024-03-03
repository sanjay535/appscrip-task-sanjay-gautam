import React from 'react'
import Header from './Header'
import Filters from './Filter'

const Container = ({products}) => {
  
  return (
    <div>
      <Header/>
      <Filters products={products}/>
    </div>
  )
}

export default Container