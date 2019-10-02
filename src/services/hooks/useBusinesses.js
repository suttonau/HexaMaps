import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [businesses, setBusinesses] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const _searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('./search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'silver spring'
        }
      })
      setBusinesses(response.data.businesses)
    } catch (err) {
      console.log(err)
      setErrorMessage('Something went wrong!')
    }
  }

  useEffect(() => {
    _searchApi('pasta')
  }, [])

  return [_searchApi, businesses, errorMessage]
}
