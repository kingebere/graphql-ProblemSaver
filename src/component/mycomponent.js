import React, {useState} from 'react';
import axios from "axios";
import {graphql} from 'react-apollo'
import {useQuery} from "@apollo/react-hooks"
import {getBooksQuery} from './Queries/Queries'
import BookDetails from './BookDetails'

function ClassCounter() {
    const [selected, setSelected] = useState(123)
  const {data} =useQuery(getBooksQuery)
   console.log(data)
        console.log(selected)
        if (data===undefined || data===null || data===[]){
            return (<div>loading...</div>)
        }else{
            return (
                <div>
              { data.books.map((book)=>
                {
                
                return(
                    
                    <ul id='book-list'>
                         <li key={book.id} onClick={(e) => {setSelected({selected:book.id})}}>{book.name}</li>
                    </ul>
                   )  
                 }
                )
                    }
        <BookDetails bookId={selected}/>
            </div>
            )}}



export default graphql(getBooksQuery)(ClassCounter)


