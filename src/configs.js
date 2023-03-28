export const defaultHeaders = {
  'CLIENT-ID' : `${process.env.REACT_APP_CLIENT_ID}`,
  'AUTHORIZATION' : `apikey ${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_API_KEY}`,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS"
}