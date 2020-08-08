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
const Welcome = props => {
  const {route, navigation} = props;
  console.log(route);
  return (
    <>
      <View>
        <Text> We believe that AI can be the next</Text>
        <View>
          <Text>{route.params.email}</Text>
          <Text>{route.params.password}</Text>
        </View>
        <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => {
              navigation.navigate('login', {
                email: route.params.email,
              });
            }}
            underlayColor="#fff">
            <Text style={styles.submitText}>Read more....</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default Welcome;
