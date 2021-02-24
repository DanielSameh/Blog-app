import React, {useState, useContext} from 'react'
import {StyleSheet} from 'react-native'
import BlogPostForm from '../Components/BlogPostForm'
import {Context } from '../Context/BlogContext'
import { StackActions } from '@react-navigation/native';


const EditScreen = ({route, navigation}) =>{
    const popAction = StackActions.pop(1);
    id = route.params.id
    const {state, EditBlogPost} = useContext(Context)
    const blogPost = state.find(blogPost => blogPost.id === id)

    return <BlogPostForm 
    initialValues= {{title: blogPost.title, Content: blogPost.Content}}
    onSubmit={(title,Content)=>{
        EditBlogPost(id, title,Content,() => navigation.dispatch(popAction))
    }}
    />
}

const style = StyleSheet.create({

})

export default EditScreen;