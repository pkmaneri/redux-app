import React, { useState } from "react";
export default function CreateTodo(props) {
    const intialPost = {
        email: "",
        comment: "",
        checked: true,
    };
    const [post, setPost] = useState(intialPost);

    // const handleOnChange = (e) => {
    //     let prevPost = JSON.parse(JSON.stringify(post));
    //     prevPost[e.target.name] = e.target.value;
    //     setPost(prevPost);


    // };
        const handleOnChange = (e) => {
            setPost({
                ...post,
                [e.target.name]:e.target.value
            })
        }
    const handleOnChangeChecked = (e) => {
        let prevPost = JSON.parse(JSON.stringify(post));
        prevPost[e.target.name] = e.target.checked;
        setPost(prevPost);

    };

    const handleClick = () => {
        props.callback(post);

    };
    const handleBack = () => {
        props.createBack(post)
    }

    return (
        <div>
            <h3>Create Post</h3>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input
                    name="email"
                    onChange={handleOnChange}
                    value={post.email}
                    className="form-control"
                    placeholder="Enter the email"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Comments
                </label>
                <textarea
                    name="comment"
                    onChange={handleOnChange}
                    value={post.comment}
                    className="form-control"
                    rows={3}
                ></textarea>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={post.checked}
                    name="checked"
                    onChange={handleOnChangeChecked}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Available For Review
                </label>
            </div>
            <button
                // disabled={disabled}
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
            >
                Add Post
            </button>
            <button className="btn btn-success m-2" onClick={handleBack}>Back</button>
        </div>
    );
}



