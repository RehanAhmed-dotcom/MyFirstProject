import React,{Component} from 'react';
import {Form, Button, Label} from 'semantic-ui-react';
// import {connect } from 'react-redux';
// import {loginfr} from './loginfr';
class Login extends Component{
    state={
        data:{
            name:"",
            password:""
        },
        loading:false,
        errors:{}
    }
    onSubmit=()=>{
        const errors = this.validate(this.state.data);
        this.setState({errors})

        if(Object.keys(errors).lenght === 0){
        // this.props.history.push('/')
    
        alert("Welcome Mother fucker")
        }
        else{
            alert("Wrong Password")
        }
    }
    
    onChange=e=>{
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
        })
    }
    validate=(data)=>{
        const errors={};
        if(!data.name) errors.name = "Name cant be empty"
        if(!data.password) errors.password = "Can't be blank"
        return errors;
    }
    render(){
        return(
    
    <Form onSubmit={this.onSubmit}>
        <h1>
            Login Page
        </h1>
        <Form.Field error={!!this.state.errors.name} >
            <Label htmlFor="name">Name</Label>
            <input 
            type="name" 
            id="name" 
            name="name" 
            placeholder="Enter name"
            value={this.state.data.name}
            onChange={this.onChange}
            />
            {this.state.errors.name && <p>Invalid name</p>}
        </Form.Field>
        <Form.Field error={!!this.state.errors.password}>
            <Label htmlFor="password">Password</Label>
            <input 
            style={{width:150}}
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter password"
            value={this.state.data.password}
            onChange={this.onChange}
            />
                        {this.state.errors.password && <p>Invalid password</p>}

        </Form.Field>
        <Button primary>Login</Button>
    </Form>
        )
    }
}
export default Login;