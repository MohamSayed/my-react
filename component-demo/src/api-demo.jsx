import React, { Component } from 'react'

class RequestDemo extends Component {
  state = { respsone: '' }
  constructor() {
    super()
  }

  componentDidMount() {
    this.getData()
  }
  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      var json_data = JSON.parse(xhr.response);
      this.setState({ respsone: json_data.message })
      console.log(json_data)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
    // send the request
    xhr.send()

  }

  render() {
    return (
      <div>
        <p>Respsone: {this.state.respsone ?
          Object.keys(this.state.respsone)
            .map(k => <p key={k}>{k.toString()}</p>)
          : ''}</p>
      </div>
    )
  }
}



export default RequestDemo;