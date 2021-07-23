import React from 'react';
import ContentMedia from './ContentMedia';

class Posts extends React.Component {
  state = {
    q: 0,
    posts: this.props.posts,
  };


  nextPost() {
    const { q } = this.state;
      this.setState({
        q: q + 1,
      });
  }

  prevPost() {
    const { q } = this.state;
      this.setState({
        q: q - 1,
      });
  }


  render() {
    const { q, posts} = this.state;
    return (
        <div>
          <div className="horizontal">
            {(q > 0) && <button className="styledButton" id="prevPost" onClick={() => this.prevPost()}>Prev</button>}
            {(q < (posts.length - 1)) && <button className="styledButton" id="nextPost" onClick={() => this.nextPost()}>Next</button>}
          </div>
          <h4>{posts[q].postInfo}</h4>
          <div className="horizontalSometimes">
            <div className="media">
              {posts[q].media.map(item => {
                return <ContentMedia id="postMedia" src={item.src} alt={item.alt} video={item.video}></ContentMedia>
              })}
            </div>
            <div className="caption">
              <p id="postNumber">{posts[q].postCaption}</p>
            </div>
          </div>
          
        </div>
    )
  }
};

export default Posts;