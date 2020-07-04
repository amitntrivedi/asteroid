import React, { Component } from 'react';
import { Container, Header, Title,  Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input,Label  } from 'native-base';
export default class FindAsteroidScreen extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            enbaleSubmit: false,
            userName : '',
            password: ''
        };
      }


      inputChangeHandler  (text)  {

        this.setState({userName:text}); 

        if (this.state.userName  !== '')
        {
            this.setState({enbaleSubmit:true}); 
        }
        else
        {
            this.setState({enbaleSubmit:false}); 
        }
    }
   
    onSubmitHandler () {
        console.log('submit button pressed'); 
    }
    
   
  render() {

   



    return (
    
        <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input value={this.state.userName}
               onChangeText = {(userName)=>{ this.inputChangeHandler(userName)} 
              
            } />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Text >{this.state.enbaleSubmit}</Text> 
            <Button block disabled= {!this.state.enbaleSubmit } onPress ={ () => {this.onSubmitHandler()}} >
            <Text>Submit</Text>
          </Button>
        
          </Form>
 
          
    );
  }
}