import React, {useState,useEffect} from 'react'
import axios from "axios"
import{useMutation} from '@apollo/client'
import {graphql} from 'react-apollo'
import {useQuery} from "@apollo/react-hooks"
import {flowRight as compose} from 'lodash'
import {getAuthorsQuery,addBookMutation,getBooksQuery} from './Queries/Queries'



function AddBooks() {
  const [Books, setBooks] = useState('');
  const [Genres, setGenres] = useState('')
  const [AuthorId, setAuthorId] = useState('')
  const [Adding,{loading,error}]= useMutation(addBookMutation)
  console.log(AuthorId)
  console.log(setAuthorId)
  const {data} =useQuery(getAuthorsQuery)
    
   if (data===undefined || data===null || data===[]){
    return (<div>loading...</div>)
}else{


  const onSubmit =( e )=> {
    e.preventDefault();
     console.log({Books,Genres,AuthorId})
     Adding({
       variables:{
         name:Books,
         genre:Genres,
         authorId:AuthorId
       },
     refetchQueries:[{query:getBooksQuery}]
     })
     console.log(Adding)
     console.log(addBookMutation)

// const ert=useMutation(addBookMutation)
   
  }  
     return(
      <form id='add-book' onSubmit={onSubmit}>
      <div className='field'>
      <label>Books:</label>
      <input  onChange={(e) => setBooks(e.target.value)} type='text'/>

      </div>
      <div className='field'>
      <label>genre:</label>
      <input  onChange={(e) => setGenres(e.target.value)} type='text'/>

      </div>
      
      <div className='field'>
      <label>Authors</label>
      <select   onChange={(e) => setAuthorId(e.target.value)}>
      <option>Authors</option>
      {  data.authors.map((author)=>{
                
        return(
            <option key={author.id} value={author.id} >{author.name}</option>
    )
    })}
     
      </select>

      </div>
      <button>add</button>
      </form>
      
  )
    
    
}
 
   
}


export default compose(
  graphql(getAuthorsQuery,{name:'getAuthorQuery'}),
  graphql(addBookMutation,{name:'addBookMutation'})
)(AddBooks)


