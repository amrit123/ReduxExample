import React, { Component } from 'react'
import propTypes from "prop-types"
import { connect } from "react-redux";
import { fetchPosts} from "../actions/postAction";

 class Posts extends Component {
     
     componentWillMount(){
       this.props.fetchPosts();
     }
     componentWillReceiveProps(nextProps){
if(nextProps.newPost){
    this.props.posts.unshift(nextProps.newPost);
}
     }
    
  render() {
      console.log(this.props.posts);
      let postItems=this.props.posts.map(post=>(  //to return in arrow function use ()
          <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
      ))
    return (
      <div>
        <h3>Posts</h3>
        {postItems}
      </div>
    )
  }
}
Posts.protoTypes={
    fetchPosts:propTypes.func.isRequired,
    posts:propTypes.array.isRequired,
    newPost:propTypes.object
}
const mapStateToProps =state => ({
posts:state.posts.items ,  //in state.posts.items, posts is from combine reducers where we map our postReducer to posts and items is from the switch case at post reducers;
newPost:state.posts.item
});
export default connect(mapStateToProps ,{ fetchPosts })(Posts); //the Posts here is the componenet name