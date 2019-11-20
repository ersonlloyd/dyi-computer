import axios from 'axios'

export default axios.create({
  baseURL: 'https://cms.staging.ohmyhome.io/techtest/calculator/bankRates/simplified',
  headers: {
    "OmhWeb-Auth":"WU5FvjUt9pTuRPaIuTaD7EOfhNRxfIqOIfSW3I9Rt307MQcQHT6MAajsTY4KPfrE"
  }
})
