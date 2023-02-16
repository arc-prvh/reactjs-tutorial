import React, { useState, useEffect } from 'react'

export default function App() {
  // useState hook
  const [ loading, setLoading ] = useState(true);
  const [ response, setResponse ] = useState(undefined);
  const [ error, setError] = useState(false);
 
  useEffect( () => {
    fetch(`http://ip-api.com/json/24.48.0.1?fields=45674495`).then( (res) => res.json() )
    .then( (res) => {
      setTimeout( () => {
        setResponse(res);
        setLoading(false);
      }, 10 * 1000)
    })
    .catch( err => {
      console.error(err)
      setError(true);
    }).finally( () => {
      
    });

  }, [])

  return (
    loading ? (<p>Loading....</p>) : (error ? <p>There was an error!</p> : <MyComponent response={response} loading={loading}/>)
  )
}


function MyComponent({response, loading}) {
  return (
    <p>Country: {response.country}</p>
  )
}
