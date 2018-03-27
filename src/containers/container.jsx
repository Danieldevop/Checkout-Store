import React, { Component } from 'react'
import firebase from 'firebase'
import Header from '../components/header'
import Body from './body'

class Container extends Component {
  state = {
    user: null,
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        var user = result.user.email
        console.log(user)

      })
      .catch(error => {
        console.log(`${error.code}`)
      })
  }

  handleLogout = () => {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log('Error'))
  }

  render() {
    return (
      <div>
        <Header
          login={this.handleAuth}
          logout={this.handleLogout}
          status={this.state.user}
        />
        <Body 
          state={this.state.user}
          login={this.handleAuth}
        />
      </div>
    )
  }
}

export default Container