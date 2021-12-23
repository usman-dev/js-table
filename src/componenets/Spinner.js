import React, { Component } from 'react'
import spinner from './spinner.gif'
import spinner2 from './spinner2.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={spinner2} alt={spinner}></img>
            </div>
        )
    }
}
