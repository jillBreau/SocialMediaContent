import React from 'react';
import Posts from '../../components/Posts';
import './Organization.css';

import p_8 from '../../images/DigitalArt/Bell-Lets-Talk.jpg'
import p_7 from '../../images/DigitalArt/Outline.jpg'
import p_6 from '../../images/DigitalArt/Objectives.jpg';
import p_5 from '../../images/DigitalArt/Rocket-Kettle.jpg';
import p_4 from '../../images/DigitalArt/1229-Halloween.jpg';
import p_3 from '../../images/DigitalArt/1229-Christmas.jpg';
import p_2 from '../../images/DigitalArt/Grads.jpg';
import p_1 from '../../images/DigitalArt/Friends.jpg';

const posts = [
  {
    media: [
      {
        src: p_1,
        alt: 'A digital media drawing',
        video: false
      },
      {
        src: p_2,
        alt: 'A digital media drawing',
        video: false
      },
      {
        src: p_3,
        alt: 'A digital media drawing',
        video: false
      },
      {
        src: p_4,
        alt: 'A digital media drawing',
        video: false
      },
      {
        src: p_5,
        alt: 'A digital media drawing',
        video: false
      },
      {
        src: p_6,
        alt: 'A digital media drawing',
        video: false
      },
      {
        src: p_7,
        alt: 'A digital media drawing',
        video: false
      },
      {
        src: p_8,
        alt: 'A digital media drawing',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Most pieces were made for fun, while some were made during involvement with student volunteer groups.
    </p>
  },
]

class DigitalArt extends React.Component {
  
  render() {
    return (
      <div className="contentContainer">
        <div className="mainContent" id="posts">
          <Posts posts={posts}></Posts>

        </div>
      </div>
    );
  };
};

export default DigitalArt;