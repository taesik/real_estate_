import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState=[
    {
        id:'1',
        title:'asdsad',
        content:'asd',
    },{
        id:'2',
        title:'asdsad',
        content:'asd',
    },
]
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state,action) {
                state.push(action.payload)
            },
            prepare(title:string,content:string) {
                return {
                    payload:{
                        id:{
                            id:nanoid(),
                            title,
                            content
                        }
                    }
                }
            },
        }
    }
});

export const selectAllPosts = (state:any) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;