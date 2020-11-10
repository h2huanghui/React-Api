import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/price.json';

class LottieDemo extends Component {

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: 'canvas'
  };

  render() {
    return (
      <div className='lottie'>
        <Lottie 
          options={this.defaultOptions}
        />
      </div>
    )
  }
}

export default LottieDemo

