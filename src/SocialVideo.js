import React, { Component } from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'


class SocialVideo extends Component {

  static propTypes = {
    service: PropTypes.oneOf(['vimeo', 'youtube', 'facebook']).isRequired,
    video: PropTypes.string.isRequired
  }

  static urlMap = new Map([
    ['youtube', 'http://www.youtube.com/embed/'],
    ['vimeo', 'https://player.vimeo.com/video/'],
    
  ]);

  getIdFromVideoString (vString) {
    const urlArr = vString.split('/');
    const idString = urlArr[urlArr.length - 1];
    const queryParams = qs.extract(vString);

    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }

  render() {
    const {service, video, ...htmlTags} = this.props;
    const src = `${SocialVideo.urlMap.get(service)}${this.getIdFromVideoString(video)}`;

    return (
      <iframe
        src={src}
        frameBorder='0'
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
        {...htmlTags}
      />
    );
  }
}

export default SocialVideo
