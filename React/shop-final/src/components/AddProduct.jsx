import { useForm } from "react-hook-form";
import "./AddProduct.css";

export default function AddProduct({onCreate}){
    const { register,
            handleSubmit
          } = useForm();

    function onSubmit(data) {
        onCreate(data);
    }

    return (
        <>
            <h2>Add product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
                <input type="text" {...register("title")} placeholder="Title" required></input>
                <input type="number" {...register("stock")} placeholder="Stock" required></input>
                <input type="number" {...register("price")} placeholder="Price" required></input>
                <input type="number" {...register("discount")} placeholder="Discount"></input>
                <input type="text" {...register("image")} placeholder="Image url" required></input>
                <button type="submit">Add</button>
            </form>
        </>
    )
}