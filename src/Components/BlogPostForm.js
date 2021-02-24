import React, {useContext, useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native'
import {Context} from '../Context/BlogContext'


const BlogPostForm = ({onSubmit, initialValues}) =>{

    const [title, setTitle] = useState(initialValues.title)
    const [Content, setContent] = useState(initialValues.Content)

    return<View>
    <Text style={styles.Title}>Enter Title:</Text>
    <TextInput style={styles.Content} value={title} onChangeText={(title) => setTitle(title)} />
    <Text style={styles.Title}>Enter Content:</Text>
    <TextInput style={styles.Content} value={Content} onChangeText={(title) => setContent(title)} />
    <Button title={'Save Post'} onPress={() => onSubmit(title,Content)} />

</View>
}

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        Content: ''
    }
}

const styles = StyleSheet.create({

    Title:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 10
    },
    Content:{
        borderWidth: 1,
        borderColor: 'black',
        padding:5,
        margin:5,
        marginBottom:15
    }
})

export default BlogPostForm;