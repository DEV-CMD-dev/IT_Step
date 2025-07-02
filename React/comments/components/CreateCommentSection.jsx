import { useForm } from "react-hook-form";

export default function CreateCommentSection({ onCreate }) {
    const { register,
            handleSubmit
          } = useForm();

    function onSubmit(data) {
        onCreate(data);
    }

    return (
        <>
            <h2>Post a comment</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="addComment">
                <label>Text:
                    <br/>
                    <textarea {...register("text")} />
                </label>
                <label>
                    Rate:
                    <input type="number" min="1" max="10" {...register("rate")}></input>
                </label>
                <br/>
                <button type="submit">Post</button>
            </form>
        </>
    )
}