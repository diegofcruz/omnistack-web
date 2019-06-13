import React, { Component } from "react";
import api from "../services/api";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    const response = await api.get("posts");

    this.setState({ feed: response.data });
  }

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <article>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">Blumenau</span>
              </div>

              <img src={more} alt="Ver mais" />
            </header>

            <img src="" alt="" />

            <footer>
              <div className="actions">
                <img src={like} alt="Curtir" />
                <img src={comment} alt="Comentar" />
                <img src={send} alt="Compartilhar" />
              </div>

              <strong>900 likes</strong>

              <p>
                Loucura
                <span className="hashtags">#legal #react</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
