import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const {id} = useParams();
    const url = "http://localhost:3001/blogs/" + id;
    const {data: blog, isPending, error} = useFetch(url);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:3001/blogs/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                history.push('/')
            })
    }

    return (
        <div className="blog-details">

            {isPending && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete This Blog</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;