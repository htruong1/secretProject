import React, {Component} from 'react'
import Link from 'gatsby-link'

class SecondPage extends Component {
  render() {
    return(
      <div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
      )
  }
}

export default SecondPage
