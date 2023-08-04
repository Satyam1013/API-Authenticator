import { useState } from 'react'
import useQuery from './useQuery'

/**
 * useQuery is a hook that provides data from the query.
 * If should set isLoading to be true, when the query changes
 *
 * @param query - api that I want to get data
 * @returns
 *  @param isLoading - data is loading
 *  @param data - data which is fetched
 *  @param error - error when fetching data (instance of Error)
 */


export default function Checker() {
  const [filters, setFilters] = useState('')
  const [limit, setLimit] = useState(9)

  const { isLoading, error, data } = useQuery(
    `https://swapi.dev/api/people/1?limit=${limit}&filters=${filters}`,
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong. {error.message}</div>
  }

  if (data) {
    return <div>{JSON.stringify(data, null, 2)}</div>
  }

  return null
}
