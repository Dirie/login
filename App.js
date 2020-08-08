
import 'react-native-gesture-handler';
// import React from 'react';

// //react navigation
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import {Image, Button} from 'react-native';

// import Welcome from './screens/welcome';
// import Login from './screens/login';

// const Stack = createStackNavigator();

// function LogoTitle() {
//   return (
//     <Image
//       style={{width: 50, height: 50}}
//       source={require('./src/image/logo.jpg')}
//     />
//   );
// }

// const App = () => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="login">
//           <Stack.Screen
//             options={{title: 'Welcome to R-N'}}
//             name="welcome"
//             component={Welcome}
//           />
//           <Stack.Screen
//             name="login"
//             component={Login}
//             options={{
//               headerTitle: props => <LogoTitle {...props} />,
//               headerRight: () => (
//                 <Button
//                   onPress={() => alert('This is a button!')}
//                   title="Info"
//                   color="#f81"
//                 />
//               ),
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;

// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

import * as React from 'react';
import * as Font from 'expo-font';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/login';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Login />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
