import React, { Component } from 'react';

import './BlogPage.css';

class BlogPage extends Component {
  render() {
    return (
      <div className="BlogPage row">
        <div className="BlogPage_header text-center">
            <h1>Meet the Developer Community</h1>
        </div>

        <div className="BlogPage_posts container">
            <div className="BlogPage_post">
                <img className="BlogPage_postAvatar" src="" alt="" />
                <span>04.10.2017.</span>
                <a href=""><b>A Recap of Reaction Action: August</b></a>
                <span className="text_red">events</span>
            </div>

            <div className="BlogPage_post">
                <img className="BlogPage_postAvatar" src="" alt="" />
                <span>04.10.2017.</span>
                <a href=""><b>A Recap of Reaction Action: August</b></a>
                <span className="text_red">events</span>
            </div>

            <div className="BlogPage_post">
                <img className="BlogPage_postAvatar" src="" alt="" />
                <span>04.10.2017.</span>
                <a href=""><b>A Recap of Reaction Action: August</b></a>
                <span className="text_red">events</span>
            </div>

            <div className="BlogPage_post">
                <img className="BlogPage_postAvatar" src="" alt="" />
                <span>04.10.2017.</span>
                <a href=""><b>A Recap of Reaction Action: August</b></a>
                <span className="text_red">events</span>
            </div>

            <div className="BlogPage_post">
                <img className="BlogPage_postAvatar" src="" alt="" />
                <span>04.10.2017.</span>
                <a href=""><b>A Recap of Reaction Action: August</b></a>
                <span className="text_red">events</span>
            </div>

            <div className="BlogPage_post">
                <img className="BlogPage_postAvatar" src="" alt="" />
                <span>04.10.2017.</span>
                <a href=""><b>A Recap of Reaction Action: August</b></a>
                <span className="text_red">events</span>
            </div>
        </div>

        <div className="BlogPage_pagination">
            <span>Page 1 of 10</span>
            <a href="">Older Posts -></a>
        </div>
      </div>
    );
  }
}

export default BlogPage;
