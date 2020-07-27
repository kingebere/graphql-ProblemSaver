import React, {useState,useEffect} from 'react'
import axios from "axios"
import {graphql} from 'react-apollo'
import {useQuery} from "@apollo/react-hooks"
import {getBookQuery} from './Queries/Queries'

function BookDetails(props) {
    const {bookId} =props
  const {selected} =bookId
  console.log(props)
  console.log(selected)
         const {book} = props.data
          
                
                
                if (book){
                    return (<div>
                        <h2>{book.name}</h2>
                        <p>{book.genre}</p>
                        <p>{book.author.name}</p>
                        <p>All books by this author</p>
                        <ul className='other-books'>
                        {
                            book.author.books.map(item=>{
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                        
                        </ul>
                    </div>)
                }else{
                   return <div>no book selected</div>
                }
                return(
                    <>
              
                    <p>Book details here</p>
                    </>
            )
            }
        
    
   




export default graphql(getBookQuery,{
    options:({bookId})=>{
        const {selected} =bookId
        return{
            variables:{
                id:selected
            }
        }
    }
})(BookDetails)


