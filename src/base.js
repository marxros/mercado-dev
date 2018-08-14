const config = {
    apiKey: "YOUR-API-KEY",
    authDomain: "AUTH DOMAIN",
    databaseURL: "https://mercadodev-marx.firebaseio.com",
    projectId: "mercadodev-marx",
    storageBucket: "gs://mercadodev-marx.appspot.com",
    messagingSenderId: "MESSAGING SENDER ID"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require ('firebase/database')
  require ('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base