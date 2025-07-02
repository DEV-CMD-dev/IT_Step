import Comment from "./Comment";

export default function CommentSection({ comments }) {
    return (
        <div className="CommentSection">
        {comments.map((comment, index) => (
            <Comment
                key={index}
                userName={comment.userName}
                rate={comment.rate}
                text={comment.text}
                date={comment.date}
            />
        ))}
        </div>
    );
}