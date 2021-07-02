import React from "react";
import posts from "../data/posts.json";
import{useParams} from "react-router-dom"
function Post(){
var currentSlug= useParams().slug
    return(
        <div>
        post {currentSlug} 
        {posts.map(post=>{
                console.log(post)
                if(post.slug===currentSlug){
                return(
                    <div key={post.slug}>
                        
                        <h1>{post.title}</h1><p>{post.content}</p></div>
                ) }
            })}
        </div>
    )
}
export default Post