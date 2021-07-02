import React from 'react';
import posts from "../data/posts.json";
import{Link} from "react-router-dom"
console.log(posts)
function Home(){
    return(
        <div>
            <h1>Home</h1>
            {posts.map(post=>{
                console.log(post)
                return(
                    <Link to={"/post/" + post.slug} key={post.slug}>
                        
                        <h1>{post.title}</h1></Link>
                ) 
            })}
        </div>
    )
}
export default Home