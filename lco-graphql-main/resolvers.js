import { nanoid } from "nanoid";

class Course {
    constructor(id,{couseName,category,price,language,email,stack,TeachingAssists
    }){
    this.id=id
    this.courseName= couseName
    this.category=category
    this.price=price
    this.language=language
    this.email=email
    this.stack=stack
    this.TeachingAssists=TeachingAssists
    }
}
const courseholder = {}
const resolvers ={
    getCourse: ({id})=>{
        return new Course(id,courseholder[id])
    },
    createCourse: ({input}) =>{
        let id =nanoid()
        courseholder[id] =input
        return new Course(id,input)
    }
}
export default resolvers