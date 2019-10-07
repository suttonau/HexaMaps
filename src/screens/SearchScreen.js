import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useBusinesses from '../services/hooks/useBusinesses'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [_searchApi, businesses, errorMessage] = useBusinesses()

  const filterBusinessesByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return businesses.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => _searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          navigation={navigation}
          results={filterBusinessesByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          navigation={navigation}
          results={filterBusinessesByPrice('$$')}
          title="Bit Pricy"
        />
        <ResultsList
          navigation={navigation}
          results={filterBusinessesByPrice('$$$')}
          title="Big Spender"
        />
        <ResultsList
          navigation={navigation}
          results={filterBusinessesByPrice('$$$$')}
          title="I'm Rich Bitch"
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen
