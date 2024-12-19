import React,{useState} from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card=(props)=>{
    let course=props.course;
    let LikedCourses=props.LikedCourses;
    let setLikedCourses=props.setLikedCourses;

    function ClickHandler() {
       //logi
       if (LikedCourses.includes(course.id)) {
         //pehl se Like hua pada tha
         setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
         toast.warning("Likes removed");
       }
       else{
         //pehle se liked nai hai
         //insert karna h ye coures liked courses me
         if (LikedCourses.length===0) {
            setLikedCourses([course.id]);
         }
         else{
            //non empty pehle se
            setLikedCourses((prev)=>[...prev,course.id]);
         }
         toast.success("Liked successfully")
       }
    }

    console.log("course: ",course)
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">
         <div className="relative" >
            <img src={course.image.url} ></img>

         <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center'>
            <button onClick={ClickHandler}>
             {
               LikedCourses.includes(course.id) ? 
               (<FcLike fontSize='1.75rem'/>):(<FcLikePlaceholder fontSize='1.75rem'/>)
             }
            </button>
         </div>

         </div>
        
         <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='text-white mt-2'>
               {
                  course.description.length >100 ? 
                  (course.description.substr(0,100))+"...":
                  (course.description)
               }
                </p>
         </div>
        </div>
    )
}

export default Card;