import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {

    const url = "http://localhost:3001/blogs";

    const {data: blogs, isPending, error} = useFetch(url);




    return (
        <div className="home">
            {error}
            {isPending && <h6>Loading.....</h6>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    )
}

export default Home;