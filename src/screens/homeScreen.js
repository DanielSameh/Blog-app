import React,{useState} from 'react'

import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default  function HomeScreen ({navigation})  {
const [inputs, setInputs] = useState('');
const [listItems, setList] = useState([]);
const [shouldShow, setShouldShow] = useState(true);


function handelRemove (id) {
  console.log(listItems)
  const newList = listItems.filter((item) => item.id !== id);
  console.log(newList)
    setList(newList);
}


    return(<View>
      <View style={styles.CreateStyle} >
      <Text style={{color:'white', fontSize: 30, fontWeight: 'bold'}}>To-Do List</Text>
      <TouchableOpacity
     onPress={() => setShouldShow(!shouldShow)}
      >
      <Ionicons  name="create" size={30} color="white" />
      </TouchableOpacity>
      </View>


{shouldShow ? (

      <View style={styles.InputBackground}>
               
      <TextInput
        placeholder= 'Add New Todo'
         style={styles.InputStyle}
         value={inputs}
         onChangeText={setInputs }         />
          
         <TouchableOpacity style={{flex:1, alignSelf: 'center', marginLeft: 15}}
         onPress={() =>{ 
          setInputs('') 
          setList([...listItems, {name: inputs,  id: Math.floor(Math.random() * 999)}])
           
        } }
         > 
      
     
      <AntDesign name="pluscircle" size={24} color="black" />
      </TouchableOpacity>
     
      </View>
  
  ) : null}


      <FlatList 
     keyExtractor={todoa => todoa.id.toString()}
      	data= {listItems}
        renderItem= {({item}) => {
          return (
          <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>
          <Text>{item.name } - {item.id}</Text>
  
          <TouchableOpacity
         onPress={()=>{ handelRemove(item.id)
         }}
          >
            <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
            </View>
            
            )
          
        }} />

      
        
    </View>)
}

const styles = StyleSheet.create({
    CreateStyle:{
      flexDirection: 'row',
      backgroundColor: '#2980b9',
     padding: 15,
     justifyContent: 'space-around'
     
    },
    InputStyle:{
      fontSize:18,
      marginHorizontal: 15,
      flex: 6,
    },
    InputBackground:{
      backgroundColor: '#f3f3f3',
      height:50,
      
      borderRadius: 5,
      flexDirection: 'row',
      
    }

})

