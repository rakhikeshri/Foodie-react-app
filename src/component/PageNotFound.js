import React from 'react'
import { useRouteError } from 'react-router-dom'

const PageNotFound = () => {
  const error = useRouteError()
  return (
    <div>
      page not found
      <h2>{error.status} : {error.statusText}</h2>
    </div>
  )
}

export default PageNotFound
