import React, { Component } from 'react'
import subjects from './hoc'

 class CompB extends Component {
    state={
        marks:0
    }
    markObtained=()=>{
        this.setState({marks:this.state.marks+1})
    }
  render() {
    return (
      <div>
          <div onMouseOver={this.markObtained}>marks:{this.state.marks},{this.props.hocsub}</div>
      </div>
    )
  }
}
export default subjects(CompB)