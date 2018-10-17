import React, { Component } from 'react';



class PickButton extends Component {
  render() {
    return (
        <div>
        <button onClick={() => window.location.reload()}>Click here to restart game

         </button>
        </div>




    );
  }
}

export default PickButton;
