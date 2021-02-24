
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const BlogReducer = (state,action) =>{

    switch(action.type){
        case('getBlog'):
        return action.payload
        case('addBlog'):
        return([...state,{
           ...action.payload
        },
        ])
        case('editBlog'):
        return( state.map( blogPost =>{
            return blogPost.id === action.payload.id ? action.payload: blogPost
        }
        ))
        case('deleteBlog'):
        return state.filter( (blogPost) => blogPost.id !== action.payload ) // Why when we add {} to the function it earse it all
        default:
        return state
    }

}
const getBlogPosts = (dispatch) =>{
    return async () => {
        const respone= await jsonServer.get('/blogposts');

        dispatch({type:'getBlog', payload: respone.data})
    }
}

const addBlogPost = (dispatch) =>{
    return async (title,Content, Callback) =>{
       const result = await jsonServer.post('/blogposts', {title,Content})
        console.log(result)
    dispatch({type: 'addBlog', payload:result.data})
   if (Callback){
    Callback();
   } ;
}
}
const deleteBlogPost = (dispatch) =>{
    return async (id) =>{
    await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type: 'deleteBlog', payload: id})
}
}
const EditBlogPost = (dispatch) =>{
    return async (id,title,Content, Callback) =>{
        await jsonServer.put(`/blogposts/${id}`, {title,Content})
        dispatch({type: 'editBlog', payload:{id ,title,Content} })
        if (Callback){
            Callback()
        };
}
}
// export const BlogProvider = ({children}) =>{

//     const [state,dispatch]= useReducer(BlogReducer,[])

//     }

//     // const [BlogPosts,setBlogPosts] = useState([]);

//     // const addBlogPost = () =>{
//     //     setBlogPosts([...BlogPosts,{title: `Blog Post #${BlogPosts.length + 1}`}])
//     // }

// return <BlogContext.Provider value={{ data: state, addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

// export default BlogContext;
export const {Context , Provider} = createDataContext(
    BlogReducer,
  {getBlogPosts, addBlogPost, deleteBlogPost,EditBlogPost},
    []
)
