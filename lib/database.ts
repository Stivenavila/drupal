const BaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL as string
var myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

var urlencoded = new URLSearchParams()
urlencoded.append('grant_type', 'password')
urlencoded.append('client_id', process.env.DRUPAL_CLIENT_ID || '')
urlencoded.append('client_secret', process.env.DRUPAL_CLIENT_SECRET || '')
urlencoded.append('username', 'oauth')
urlencoded.append('password', 'Esinergia2024*')

export var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  // body: urlencoded,
  redirect: 'follow',
}

// fetch(`${BaseUrl}/oauth/token`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error))