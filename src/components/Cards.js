import React ,{useState} from 'react';
import Card from './Card';

const Cards=(props)=>{
    let courses=props.courses
    let category=props.category
    console.log(courses)
    const [LikedCourses,setLikedCourses]=useState([]);
    
function getCourses () {
    if(category==="All"){
        let allCoures=[];
    Object.values(courses).forEach(array=>{
        array.forEach(courseData => {
            allCoures.push(courseData);
        })
    })
    console.log("all courses: ",allCoures)
    return allCoures;

    }
    else{
        //main sirf specific categiry ka data pass krunga
  return courses[category]
    }
    
}

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4 ">
          {
            getCourses().map((course)=>{
                console.log("course 1: ",course);

                return <Card key={course.id} 
                course={course}
                LikedCourses={LikedCourses}
                setLikedCourses={setLikedCourses}
                />
            })
          }
        </div>
    )
}

export default Cards;