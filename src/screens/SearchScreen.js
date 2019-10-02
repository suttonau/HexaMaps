import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'
import yelp from '../services/api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [businesses, setBusinesses] = useState([])

  const _searchApi = async () => {
    const response = await yelp.get('./search', {
      params: {
        limit: 50,
        term,
        location: 'silver spring'
      }
    })
    setBusinesses(response.data.businesses)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={_searchApi}
      />
      <Text>We have found {businesses.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen
