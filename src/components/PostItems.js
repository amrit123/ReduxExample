import React, { Component } from 'react'
import propTypes from "prop-types"
import { connect } from "react-redux";
import { createPost} from "../actions/postAction";

  class PostItems extends Component {
      constructor(){
          super();
          this.state={
              title:"",
              body:""
          }
      }
      onChange=(e)=>{
          this.setState({[e.target.name]:e.target.value});

      }
      onSubmit=(e)=>{
          e.preventDefault();
          const post={
              title:this.state.title,
              body:this.state.body
          }
          this.props.createPost(post);

      }
  render() {
    return (
      <div>
        <h3>Add Posts</h3>
        <form onSubmit={this.onSubmit}>
        <div>
        <label>Title:</label>
        <br/>
        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
        
        </div>
        <br/>
        <div>
        <label>Body:</label>
        <br/>
        <textarea type="text" name="body" onChange={this.onChange}  value={this.state.body}/>
        </div>
        <br/>
        <button type="submit"> Submit</button>
        </form>
      </div>
    )
  }
}
PostItems.protoTypes={
    createPost:propTypes.func.isRequired,
    posts:propTypes.array.isRequired
}
const mapStateToProps =state => ({
post:state.posts.item   //in state.posts.items, posts is from combine reducers where we map our postReducer to posts and item is from the switch case at post reducers that return new added post;
});
export default connect(mapStateToProps ,{ createPost })(PostItems); //the PostItems here is the componenet name