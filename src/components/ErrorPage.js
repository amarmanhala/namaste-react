import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const whatsTheError = useRouteError();
  console.log(whatsTheError);
  return (
    <div>
      <h1>Oops! There is some prolem.</h1>
      <h2>{whatsTheError.status + " " + whatsTheError.statusText}</h2>
    </div>
  )
}

export default ErrorPage 