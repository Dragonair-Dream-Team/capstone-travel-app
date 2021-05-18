
import React from "react";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
class Wheel extends React.Component {
  constructor(){
    super();
    this.state = {
      roll: true
    }
    this.handleclick = this.handleclick.bind(this)
  }
  handleclick(){
    this.setState({
      roll: !this.state.roll
    })
  }
  render(){
    console.log(this.state.roll)
    return (
      <div>
        {this.state.roll === true ? (       
          <div>
            <h1>
              1.. 2.. 3..</h1>
          <ul className="circel1">
            <li>
              <div className="text"
                    contentEditable="true"
                    spellcheck="false">drinks</div> 
            </li>
            <li>
              <div className="text"
                    contentEditable = "true"
                    spellCheck="false">appetizer</div> 
            </li>
            <li>
              <div className="text"
                    contentEditable = "true"
                    spellCheck="false">entree</div> 
            </li>
            <li>
              <div className="text"
                    contentEditable = "true"
                    spellCheck="false">dessert</div> 
            </li>
          </ul>
          <button class="spin" onClick={this.handleclick}>
              Stop
          </button>
          </div>
        ):(
          <div>
            <p>
            Your assigned course is ...
            </p>
            <Link to="/invite">
            <button>
              Next
          </button>
            </Link>
          </div>
          )
        }
    </div>
    )
  }
}

export default Wheel;
