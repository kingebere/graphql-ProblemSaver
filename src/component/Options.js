// import React, {useState,useEffect} from 'react'
// import axios from "axios"
// import {gql} from '@apollo/client'
// import {graphql} from 'react-apollo'
// import {useQuery} from "@apollo/react-hooks"


// function AddBooking(props) {
//    const {name}=props
//   console.log(props)

//   return(
//       <form id='add-book'>
//       <div className='field'>
//       <label>Books:</label>
//       <input type='text'/>

//       </div>
//       <div className='field'>
//       <label>genre:</label>
//       <input type='text'/>

//       </div>
//       <div className='field'>
//       <label>author:</label>
//       <select>
//       <option>
//       select author
//       </option>
//       <option>
// {name}
//       </option>
//       </select>

//       </div>

     
      
//       <button>add</button>
//       </form>
//   )
   
// }



// export default AddBooking


// if (data===undefined || data===null || data===[]){
//     return (<div>loading...</div>)
// }else{
//     return data.books.map((book)=>{
        
//         return(
//             <li key={book.id}>{book.name}</li>
//     )
//     })
// }