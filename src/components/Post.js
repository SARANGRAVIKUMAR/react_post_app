import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/postActions";
import PropTypes from "prop-types";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.post.unshift(nextProps.newPost)
    }
  }
  render() {
    const postItems = this.props.post.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    );
  }
}
Post.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  post: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
};

//here we are using the term post as in reducer/index.js we use post
const mapStateToProps = (state) => ({
  post: state.post.items,
  newPost: state.post.item,
});
export default connect(mapStateToProps, { fetchPost })(Post);
