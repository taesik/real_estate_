import React from "react";
import { TPostListsProps } from "./PostLists.types";
import {useSelector} from "react-redux";



const PostLists: React.FC<TPostListsProps> = (props: TPostListsProps): React.ReactElement => {
    const posts = useSelector((state:any)=>state.posts);

    const renderedPosts = posts.map((post:any)=> (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{posts.content.substring(0,100)}</p>
        </article>
    ))

    return <div>
        {renderedPosts}
    </div>;
}

export default PostLists;
