import axios from "axios";
const apikey = import.meta.env.VITE_REACT_AIRTABLE_TOKEN

export const api = axios.create({
  baseURL: `https://api.airtable.com/v0/`,
  headers: {
    Authorization: `Bearer ${apikey}`
  }
})
