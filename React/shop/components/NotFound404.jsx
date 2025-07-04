import { Link } from "react-router-dom";
import "./NotFound404.css";

export default function NotFound404() {
    return (
        <div className="notFound">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Return to main page</Link>
        </div>
    );
}
