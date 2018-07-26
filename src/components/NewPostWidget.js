import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class NewPostWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageText: ''
        }
    }
    handleTextChange = (event) => {
        this.setState({messageText: event.target.value})
    }
    render() {
        return (
            <div>
                <Typography variant='subheading' style={{padding: 12}}>Create a new post</Typography>
                <TextField onChange={this.handleTextChange}  style={{padding: 12}} />
                <Button variant='outlined' size='small' style={{padding: 4}} >Choose your paper</Button>
                <Button variant='outlined' size='small' style={{padding: 4}} >Choose your typeface</Button>
                <Button variant='outlined' size='small' style={{padding: 4}} >Post</Button>
            </div>
        )
    }
}