/**
 Login screen
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

// import {Button} from 'react-native-elements';

const Login = ({route, navigation}) => {
  const [errorState, setErrorState] = React.useState({
    error: {},
  });

  // data object declared
  const [dataState, setDataState] = React.useState({
    data: {email: '', password: ''},
  });

  // validation property validates the input during onChange event.
  const validateProperty = ({name, value}) => {
    const obj = {[name]: value};
    const Schema = {[name]: schema[name]};
    const {error} = Joi.validate(obj, Schema);
    return error ? error.details[0].message : null;
  };

  // validate method validates the input on form submit.
  const validate = () => {
    const {error} = Joi.validate(dataState.data, schema, {
      abortEarly: false,
    });

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const handleChange = ({currentTarget: input}) => {
    const error = {...errorState.error};
    const errorMessage = validateProperty(input);

    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = {...dataState.data};

    data[input.name] = input.value;

    setDataState({data});
    setErrorState({error});

    // this.setState({ data, error });
  };
  const do_submit = e => {
    e.preventDefault();
    const {email, password} = dataState.data;
    console.log(email);
    // window.location = "/home";
    myFirebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        props.history.push('/home');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const submit = () => {
    const {email, password} = dataState.data;
    navigation.navigate('welcome', {
      email: email,
      password: password,
    });
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Image
              source={require('../src/image/logo.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <Text>{route.params && route.params.email}</Text>
          </View>
          <View style={styles.emailView}>
            <View>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                value={dataState.email}
                onChangeText={text => {
                  const data = {...dataState.data};
                  data['email'] = text;
                  setDataState({data});
                }}
                style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput
                value={dataState.password}
                onChangeText={text => {
                  const data = {...dataState.data};
                  data['password'] = text;
                  setDataState({data});
                }}
                secureTextEntry={true}
                style={styles.input}></TextInput>
            </View>

            <View>
              <TouchableHighlight
                style={styles.submit}
                onPress={submit}
                underlayColor="#fff">
                <Text style={styles.submitText}>LOGIN</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  logo: {
    width: 110,
    height: 150,
  },
  emailView: {
    padding: 20,
    marginTop: 60,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    paddingLeft: 20,
    fontSize: 15,
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },

  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#743A3A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Login;
