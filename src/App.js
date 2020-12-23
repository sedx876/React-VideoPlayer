import React, { Component } from 'react'
import SocialVideo from './SocialVideo'
import './App.css';

const videos = [
  {
    service: 'vimeo',
    video: 'https://vimeo.com/121657705'
  },
  {
    service: 'facebook',
    video: 'https://www.facebook.com/LillysCry/videos/2063699613901421/?t=0'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/watch?v=5_Te_sazTUY'
  },
]


class App extends Component {
  
  constructor (props){
    super(props);
    this.state = {
      videoIndex: 0
    };
  }

  goToVideo (index){
    let videoIndex = index;
    if (videoIndex < 0){
      videoIndex = videos.length - 1;
    }else if (videoIndex >= videos.length){
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }

  render(){
    const {service, video} = videos[this.state.videoIndex];
    return(
      <div>
        <SocialVideo 
          service={service} 
          video={video} 
          width={500} 
          height={270}
        />

        <p>
          <span>{service}: </span>
          <span>{video}</span>
        </p>

        <button onClick={this.goToVideo.bind(this, this.state.videoIndex - 1)}>
          Previous
        </button>

        <button onClick={this.goToVideo.bind(this, this.state.videoIndex + 1)}>
          Next
        </button>
      </div>
    )
  }

}

export default App;
