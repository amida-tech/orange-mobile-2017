import React from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { 
  InputGroup, 
  Input, 
  Icon, 
  Button, 
  Container,
  Header,
  Text,
  View,
} from 'native-base';
import styles from './styles.js';


class Auth extends React.Component {
  
    constructor(props){
      super(props);
      this.initialState = {
        email: 'amida@amida.com',
        password: '1234',
        auth_token: 'nope',
      };
      this.state = this.initialState;
    }
  
    onPressLogin() {
        //attempt to authenticate using Fetch
        console.log("Here");
        const response = fetch('http://localhost:5000/v1/auth/token', {
          method: 'POST',
          headers: {
            'X-Client-Secret': 'testsecret',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: 'dummy@amida-demo.com',
            password: 'testtest',
          })
        })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => {
          console.error(error);
        });
      this.setState({ auth_token: response.toString()});
      
    }
  
    render() {
      return (
          <Container>
              <View style= {styles.authContainer}>
                  <TouchableWithoutFeedback
                      onPress={dismissKeyboard}
                    >
                      <View style = {styles.content}>
                          <InputGroup style = {styles.input}>
                              <Input
                                  placeholder="Email"
                                  keyboardType="email-address"
                                  autoCorrect={false}
                                  autoCapitalize="none"
                                  onChangeText={email => this.setState({ email })}
                                  //value = {this.state.email}
                              />
                          </InputGroup>

                          <InputGroup style = {styles.input}>
                              <Input
                                  placeholder="Password"
                                  autoCapitalize="none"
                                  onChangeText={password => this.setState({ password })}
                                  secureTextEntry
                                />
                          </InputGroup>
                          <Button
                              style={styles.button}
                              onPress={() => this.onPressLogin()}
                          >
                              <Text>Login</Text>
                          </Button>
                          <Text>{this.state.auth_token}</Text>
                        </View>
                </TouchableWithoutFeedback>
               </View>
          </Container>
      )

    }
  
}



export default Auth;