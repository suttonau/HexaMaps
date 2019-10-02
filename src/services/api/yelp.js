import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer g9vsE6k889Mvawzqw8pnAvG9lleTIHGCN_jqaimqV83pIWRLWqyZVatVWrH5hWgRXAFm6qElXywWW2G54gbMUxJ68NWLRkuGMf66MwbG6qmsXsRGMvcyJ-tyGEeSXXYx'
  }
})
