import React from "react";

const CommentView = (c: PostComment) : React.JSX.Element => {

    let commentsView = 
    <>
        {c.subComments.map((c: PostComment) => { return CommentView(c) })}
    </>

    return (
        <div>
            {c.user.username} - "{c.content}"
            <br/>
            {c.likes} &#x2764;
            <br/>
            {commentsView}

        </div>
    )
}

export default CommentView