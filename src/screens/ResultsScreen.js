import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../services/api/yelp'

const ResultsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  console.log(result)

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getBusiness(id)
  }, [])

  return (
    <View>
      <Text>Results</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ResultsScreen
