import React from 'react'
import { HeadComp } from '../components/utills'
import Search from '../components/Search/Search'

const index = () => {
  return (
    <>
    <HeadComp page={"Home"} />
    <div>
    <Search />
    </div>
    </>
  )
}

export default index