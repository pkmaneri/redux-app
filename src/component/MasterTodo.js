import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData, postGet, postRemove, postUpdate } from "../action/myaction";
import CreateTodo from "./CreateTodo";
import ListTodo from "./ListTodo";
import UpdateTodo from "./UpdateTodo";

const MasterTodo = () => {
    const dispatch = useDispatch();
    const { postLists } = useSelector(state => state.dataPost)

    const intialUpdateState = {
        post: {
            comment: "",
            email: "",
            _id: "",
            checked: true,
        },
    }
    const [updatePost, setUpdatePost] = useState(intialUpdateState);
    const [toggle, setToggle] = useState("listView");

    const handleCreateTodo = (post) => {
        var url = "http://localhost:4000/v1/todo/";
        axios.post(url, post).then(response => {
            dispatch(postData(response.data))
            getPost();
            setToggle("listView")

        })
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:4000/v1/todo/" + id)
            .then(response => {
                console.log(response.data)
                dispatch(postRemove());
                getPost();
            })
    };
    
   
    const handleUpdate = (post) => {
        setUpdatePost({
            post: post,
        });
        setToggle("updateView")
    }
    
    const handleUpdateNew = (post) => {
        axios.put("http://localhost:4000/v1/todo/"+post.id, post)
            .then(response => {
                dispatch(postUpdate(response.data));
                getPost();
            })
            console.log(post)
            setToggle("listView")
    }

    const getPost = () => {
        var url = "http://localhost:4000/v1/todos";
        axios.get(url)
        .then(response => {
            console.log(response)
            dispatch(postGet(response.data));
           setToggle("listView")
        })
        .catch((error) => console.log(error))
    };
     
    useEffect(() => {
        getPost();
    }, []);
    const createBackk = () => {
        setToggle("listView")
    }
    const handleBack = () => {
       setToggle("listView")
    }
  

    if (toggle === "createView") {
        return (
            <div className="container" >
                <CreateTodo callback={handleCreateTodo}
                    createBack={createBackk} />
            </div>
        )
    } else if (toggle === "updateView") {
        return (
            <div className="container" >
                <UpdateTodo
                    updatePost={updatePost}
                    updateCallback={handleUpdateNew}
                    updateBackCallback={handleBack}
                />
            </div>
        )
    } else if (toggle === "listView") {
        return (
            <div className="container" >
                <button
                    className="btn btn-primary my-2"
                    style={{ float: "right" }}
                    onClick={() => setToggle("createView")}
                >
                    Create Post
                </button>
                <ListTodo  postLists={postLists}
                    deleteCallback={handleDelete}
                    updateCallback={handleUpdate}
                />
            </div>
        )
    } else {
        return <></>
    }

}
export default MasterTodo;