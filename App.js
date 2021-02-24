import React from 'react'
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/homeScreen'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import { Provider } from './src/Context/BlogContext'
import { Feather } from '@expo/vector-icons';

const Root = createStackNavigator()



export default function App() {
  return (
    <Provider>
    <NavigationContainer>
      
      <Root.Navigator>
        {/* <Root.Screen name = "HomeScreen" component={HomeScreen} /> */}
        <Root.Screen name= "Blogs" component={IndexScreen}
      options = {({navigation,route}) =>
      ({
        headerRight: () => (
          <TouchableOpacity style={styles.HeaderIcon} onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        )
      })
    }

  
        />
        <Root.Screen name= "Show" component={ShowScreen} 
        options={ ({navigation, route}) =>({
          headerRight:()=>(
            <TouchableOpacity style={styles.HeaderIcon} onPress={() =>{navigation.navigate('Edit', {id:route.params.id})}}>
              <Feather name="edit"   size={30} />
            </TouchableOpacity>
          )
        })
            
        }
        />
        <Root.Screen name= "Create" component={CreateScreen} />
        <Root.Screen name= "Edit" component={EditScreen} />
      </Root.Navigator>
      
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
  HeaderIcon: {
    paddingRight: 10  
  }
})