import React from 'react';
import './ContentMedia.css';

class ContentMedia extends React.Component {

  render() {
    const { src, alt, id, video } = this.props;
    return (
      <div>
        {!video && 
          <img className="contentMedia" id={id} src={src} alt={alt}></img>
        }

        {video && 
          <video className="contentMedia" id={id} autoPlay controls>
            <source src={src} type="video/mp4"></source>
            {alt}
          </video>
        }
      </div>
      
    )
  }
}

export default ContentMedia;