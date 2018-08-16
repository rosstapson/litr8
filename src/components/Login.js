import React, {
    Component
} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
//import { withStyles } from '@material-ui/core/styles';

class Login extends Component {
    // const styles = theme => ({
    //     container: {
    //       display: 'flex',
    //       flexWrap: 'wrap',
    //     },
    //     textField: {
    //       marginLeft: theme.spacing.unit,
    //       marginRight: theme.spacing.unit,
    //       width: 200,
    //     },
    //     menu: {
    //       width: 200,
    //     },
    //   });
    
    state = {
        name: '',
        password: ''
    };
    
    handleChange = name => event => {
        console.log(this.state)
        this.setState({
            [name]: event.target.value,
        });
    };
    handleClick = () => {
        if (!this.state.name || this.state.name === '') {
            alert("Please enter a valid username");
            return;
        }
        if (!this.state.password || this.state.password === '') {
            alert("Please enter a valid password");
            return;
        }
        this.props.store.login({ name: this.state.name, password: this.state.password})
    }
    render() {
        //console.log(this.props.store.user)
        return(
            <form noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    //className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.handleChange('password')}
                    margin="normal"
                    />
                <Button 
                    onClick={this.handleClick}
                >
                    Zomg
                </Button>
            </form>
        )
    }
}

export default Login