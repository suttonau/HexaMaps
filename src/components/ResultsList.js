import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import BusinessDetail from './BusinessDetail'

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(res) => res.id}
        renderItem={({ item }) => {
          return <BusinessDetail business={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
})

export default ResultsList
