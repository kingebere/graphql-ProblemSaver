const {graphql , GraphQLSchema, GraphQLObjectType , GraphQLString ,GraphQLInt , GraphQLList ,GraphQLNonNull}= require('graphql')
const xy = require ("lodash")

const Book = require ('../models/book')

const Author = require ('../models/author')

// const books=[
//     {name:"jhhbhb", genre:"fandddd", id:'1' , authorId:'1'},
//     {name:"sshhhbhb", genre:"hndddd", id:'2' , authorId:'2'},
//     {name:"kjhbhb", genre:"jjndddd", id:'3' , authorId:'3'},
//     {name:"gggggg", genre:"yer", id:'4' , authorId:'2'},
//     {name:"ndvj", genre:"nji", id:'5' , authorId:'3'},
//     {name:"gboy", genre:"cff", id:'6' , authorId:'3'},
// ]
// const authors=[
//     {name:"qwerty", age:45, id:'1' },
//     {name:"baddest", age:98, id:'2' },
//     {name:"king", age:9, id:'3' }
// ]


const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{
            type :GraphQLString
        },
        name:{
            type: GraphQLString
        },
        genre:{
            type: GraphQLString
        },
        author:{
            type: AuthorType,
            resolve(parent , args) {
                console.log(parent)
                // return xy.find(authors ,{id:parent.authorId})
                return Author.findById(parent.authorId)
            
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{
            type :GraphQLString
        },
        name:{
            type: GraphQLString
        },
        age:{
            type: GraphQLInt
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                // return xy.filter(books , {
                //     authorId :parent.id})
                return Book.find({authorId:parent.id})
                
            }
        }
    })
})



const Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                age:{type: new GraphQLNonNull(GraphQLInt)}
            },
        
        resolve (parent,args){
            let author =  new Author({
                name:args.name,
                age:args.age
            });
           return author.save()
        }
        },
        addBook:{
            type:BookType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                genre:{type: new GraphQLNonNull(GraphQLString)},
                authorId:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                let book = new Book ({
                    name:args.name,
                    genre:args.genre,
                    authorId:args.authorId
                })
                return book.save()
            }
        }
    }
})
const RootQuery  = new GraphQLObjectType ({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve (parent,args){
            //   return  xy.find(books,{id:args.id})
            return Book.findById(args.id)
            }
        } ,
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                // return xy.find(authors , {id:args.id})
                return Author.findById(args.id)

            }
        },

        books:{
            type : new GraphQLList(BookType),
            resolve (parent , args){
                // return books
                return Book.find({})
            }
        },
        authors:{
            type : new GraphQLList(AuthorType),
            resolve(parent , args){
                // return authors
                return Author.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})