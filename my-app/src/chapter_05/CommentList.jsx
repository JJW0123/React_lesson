import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "사람1",
        comment: "댓글1",
    },
    {
        name: "사람2",
        comment: "댓글2",
    },
    {
        name: "사람3",
        comment: "댓글3",
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
                })}
        </div>
    );
}

export default CommentList;