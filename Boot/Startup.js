import React, { Component } from 'react';
import FindAsteroidScreen from './../screens/FindAsteroidScreen'
import { Container, Header, Title,  Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input,Label  } from 'native-base';
import DrawerExample from '../screens/DrawerExample';
export default class Startup extends Component {

   
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent >
              <Icon name='menu' >
                
                </Icon>
             
              
            </Button>
            
          </Left>
          <Body>
            <Title>Nasa Astroid </Title>
          </Body>
          <Right />
        </Header>
        <Content>

       <FindAsteroidScreen />
          
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Made with love by Amit Kumar Trivedi</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}