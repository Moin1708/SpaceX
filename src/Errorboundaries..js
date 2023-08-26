import React, { Component } from 'react'

export default class Errorboundaries extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }

    }
    static getDerivedStateFromError(){
        return {hasError:true}

    }

  render() {
    if(this.state.hasError){
        return <h1>You are redirected to the Wrong page</h1>
    }
    return this.props.children
  }
}
