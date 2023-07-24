import React from 'react'
import { useRouteError } from 'react-router-dom'

const PageNotFound = () => {
  const error = useRouteError()
  return (
    <div className='m-24 text-2xl font-bold'>
      <h2>{error.status} : {error.statusText}</h2>
    </div>
  )
}

export default PageNotFound
