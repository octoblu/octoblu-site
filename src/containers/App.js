import React from 'react'

import Banner from "../components/Banner"
import Features from "../components/Features"
import Header from "../components/Header"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Features />
      </div>
    )
  }
}
