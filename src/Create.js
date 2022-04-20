import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('kyawzayar')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog)
        setIsPending(true)

        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added')
                setIsPending(false)
                history.push('/')
                // history.go(-1)
            });


    }

    return (
        <div className="create">
            <h1>Create a Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                

                <label>Blog Body: </label>
                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    required
                />
                

                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="kyawzayar">Kyaw Zayar</option>
                    <option value="other">Other</option>
                </select>
                <p>{author}</p>

                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;