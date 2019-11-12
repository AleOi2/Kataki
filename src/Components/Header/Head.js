import React, { Component } from 'react'
import ReactSVG from 'react-svg'

class Head extends Component {
    
    render() {
        const { altura, cor } = this.props;

        const Head = {
            position: 'relative',
            backgroundColor: cor,
            //border: '3px solid blue',
            //minHeight: '150px',
            minHeight: altura,
            backgroundImage: 'linear-gradient(' +  cor +  ' 10%, 90%, #000000 100%)'
        };

        console.log('linear-gradient(' +  cor +  '10%, 90%, #000000 100%)')
        return (
            <div style = { Head }>
                <ReactSVG src = './../../Images/Logo.svg'></ReactSVG>
            </div>
        )
    }
}

export default Head;