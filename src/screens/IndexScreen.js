import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Button,TouchableOpacity} from 'react-native';
import { Context } from '../Context/BlogContext'
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) =>{
 
    
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context)
const [loading,setLoading] = useState(false)
    useEffect(() => {
        const getposts = async () => {
               setLoading(true);
        await   getBlogPosts();
        setLoading(false);
        }
        getposts();

    }, []);
console.log(state);

    return loading?<Text>Loading ...</Text>:<View>

   

        <FlatList  
        data= {state}
        keyExtractor= {BlogPosts => BlogPosts.title}
        renderItem={
            ({item }) => {
                return <TouchableOpacity onPress= {() => navigation.navigate('Show',{ id : item.id })}> 
                <View style={styles.row}>
                    <Text style={{fontSize: 18}} >{item.title} - {item.id}</Text>
                    <TouchableOpacity
                    onPress={() => {deleteBlogPost(item.id)}}
                    >
                    <Feather name="trash" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
            
            }
        }
        />
    </View>
}




const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderTopWidth: 1,
        borderColor: 'gray'

    }
});

export default IndexScreen;