import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({ baseUrl: 'http://192.168.1.67:4000/api' }); // Reemplaza con la URL de tu API

export const publicationApi = createApi({
  reducerPath: 'postsApi',
  baseQuery,
  keepUnusedDataFor: 5,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPost: builder.query({
       query: ()=> "/post",
       keepUnusedDataFor: 2,
       providesTags: ["Posts"]
    }),

    createPost: builder.mutation({
      query: (newPost) => ({
        url: '/post',
        method: 'post',
        body: newPost
      }),
      invalidatesTags: 'Posts'
    }),
    searchPosts: builder.query({
      query: ({filtro, buscar}) => ({
        url: `/post/buscar/${filtro}/${buscar}`,
      }),
      providesTags: ["Posts"],
    }),
    
    
  }),
  
 

});

export const { useGetPostQuery, useCreatePostMutation, useLazyGetPostQuery, useSearchPostsQuery, useLazySearchPostsQuery } = publicationApi;


export const publicationSlice = createSlice({
  name: 'publication',
  initialState: {},
  reducers: {},
});

export default publicationSlice.reducer;
