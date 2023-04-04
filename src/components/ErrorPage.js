import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const whatsTheError = useRouteError();
  return (
    <div>
      <h1>Oops! There is problem happened.</h1>
      <h2>{whatsTheError.status + " : " + whatsTheError.statusText}</h2>
    </div>
  )
}

export default ErrorPage