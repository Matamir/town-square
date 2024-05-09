import React from "react";
import CommentView from "./commentView.tsx";

const PostView = (p: Post) : React.JSX.Element => {

    let commentsView = 
    <>
        {p.comments.map((c: PostComment) => { return CommentView(c) })}
    </>

    return (
        <div>
            {p.user.username} - "{p.content}"
            <br/>
            {p.likes} &#x2764;
            <br/>
            {commentsView}

            <br/><br/>
        </div>
    )
}

export default PostView