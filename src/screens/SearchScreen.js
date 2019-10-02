import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import yelp from '../services/api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
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

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => _searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen
