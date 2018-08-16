import React, { Component } from 'react';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {
    CardHeader,
    Avatar,
    IconButton,
    CardActions
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    textField: {
        display: 'flex',
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'red',
    },
  });
export default class NewPostWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageText: '',
            expanded: false
        }
    }
    handleExpandClick = () => {
        let expanded = !this.state.expanded;
        this.setState({ expanded });
    };
    handleTextChange = (event) => {
        this.setState({messageText: event.target.value})
    }
    render() {
       
        return (
            <Card className={styles.card}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="Recipe" className={styles.avatar}>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Create a new Post"                    
                />
                 <CardActions className={styles.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={classnames(styles.expand, {
                        [styles.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <TextField onChange={this.handleTextChange}  style={{padding: 12}} />
                <Button size='small' style={{padding: 4}} >Choose your paper</Button>
                <Button size='small' style={{padding: 4}} >Choose your typeface</Button>
                <Button size='small' style={{padding: 4}} >Post</Button>
            </Card>
        )
    }
}