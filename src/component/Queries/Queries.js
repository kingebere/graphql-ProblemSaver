import {gql} from '@apollo/client'
import {onError} from "@apollo/client/link/error"

const getAuthorsQuery = gql`
 {
    authors{
        name
        id
    }
}`

const getBooksQuery = gql`
 {
    books{
        name
        genre
        id
    }
}`

const addBookMutation = gql`
mutation($name:String!,$genre:String!,$authorId:String!){
    addBook(name:$name ,genre:$genre,authorId:$authorId){
        name
        id
    }
}`

const getBookQuery = gql`
query($id:String!){
    book(id:$id){
        id
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}
`

export {getAuthorsQuery,getBooksQuery,addBookMutation,getBookQuery}