import React, { Component } from 'react';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: ''
        }
    }
    componentDidMount() {
        this.props.store.getPosts()
            .then(posts => {                
                this.setState({posts: posts.data})
            })
            .catch(error => {
                this.setState({errorMessage: error.message})
            })
    }
    render() {
        return(
            <div>
                <h2>Posts</h2>
                {this.state.posts &&
                <ul>
                    {this.state.posts.map(post => {
                        return <li key={post.id}>{post.text}</li>
                    })}
                </ul>
            }
            {this.state.errorMessage && 
                <div>{this.state.errorMessage}</div>
            }
            </div>
        )
    }
}