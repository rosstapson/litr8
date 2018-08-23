import React, { Component } from 'react';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.props.store.getUsers()
            .then(users => {                
                this.setState({users: users.data})
            })
            .catch(error => {
                this.setState({errorMessage: error.message})
            })
        
     
    }
    render() {
        return <div>
            UserList
            {this.state.users &&
                <ul>
                    {this.state.users.map(user => {
                        return <li key={user.id}>{user.email}</li>
                    })}
                </ul>
            }
            {this.state.errorMessage && 
                <div>{this.state.errorMessage}</div>
            }
        </div>
    }
}