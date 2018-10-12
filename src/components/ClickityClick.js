// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component{
  constructor(){
    super()
    this.state = {clicked:false}
  }

  isClickedTag(){
    debugger
    if(this.state.clicked == false){
      return "Button hasn't been clicked!"
    } else {
      return "Button has been clicked!"
    }
  }

render(){
  return(<button>{this.isClickedTag()}</button>)
}
}

export default ClickityClick;
