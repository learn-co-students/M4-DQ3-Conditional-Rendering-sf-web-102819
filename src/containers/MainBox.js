import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'


class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      displayBox: "",
      activated: ""
    }
  }

  

  onSelection = (event) => {
    this.setState({activated: event.target.id})
    if (event.target.id === "profile") {
      this.setState({displayBox: < Profile/>})
    }
    else if (event.target.id === "pokemon") {
      this.setState({displayBox: < Pokemon/>})
    }
    else if (event.target.id === "cocktail") {
      this.setState({displayBox: < Cocktails/>})
    }
    else if (event.target.id === "photo") {
      this.setState({displayBox: < Photos/>})
    }
    



  }



  render() {
 

    return (
      <div>
        <MenuBar onSelection={this.onSelection} activated={this.state.activated}/>
        {this.state.displayBox}
      </div>
    )
  }

}

export default MainBox
