import React from "react";

const ListTodo = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Show Posts</h3>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Comment</th>
            <th scope="col">Checked</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.postLists.map((post, id) => {
            console.log(post)
            const _id = post._id
            return (
              <tr key={_id}>
                <td>{id + 1}</td>
                <td>{post.email}</td>
                <td>{post.comment}</td>
                <td>{post.checked + ""}</td>
                <td
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <i
                    className="fa fa-trash ml-2"
                    style={{ color: "red" }}
                    aria-hidden="true"
                    onClick={() => {
                      props.deleteCallback(_id)
                    }}
                  ></i>
                  <i
                    className="fa fa-pencil ml-2"
                    style={{ color: "green" }}
                    aria-hidden="true"
                    onClick={() => {
                      props.updateCallback(post)
                    }}
                  ></i>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}
export default ListTodo