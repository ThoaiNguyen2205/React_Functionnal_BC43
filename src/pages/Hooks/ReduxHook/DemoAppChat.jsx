import React, { useRef } from "react";
// hook react-redux
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentAction,
  updateUserComment,
} from "../../../redux/reducers/appChatReducer";
const DemoAppChat = (props) => {
  const { arrComment, userComment } = useSelector(
    (state) => state.appChatReducer
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userComment);
    //Đưa dữ liệu lên redux
    const action = addCommentAction(userComment);
    dispatch(action);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    // Đưa dữ liệu id và value lên redux
    const action = updateUserComment({ id, value });
    // Gởi object có id và value lên redux
    dispatch(action);
  };
  console.log(arrComment);
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Demo chat</h3>
      <div className="card">
        <div className="card-header">
          {arrComment.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img
                    src={`https://i.pravatar.cc?u=${comment.name}`}
                    alt=""
                    style={{ height: 100 }}
                  />
                </div>
                <div className="col-10">
                  <h3 className="text-danger">{comment.name}</h3>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-body">
          <div className="form-group">
            <p>Name</p>
            <input
              id="name"
              className="form-control"
              onChange={handleChange}
              value={userComment.name}
            />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input
              id="content"
              className="form-control"
              onChange={handleChange}
              value={userComment.content}
            />
          </div>
          <div className="form-group">
            <p>Name</p>
            <button className="btn btn-success" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DemoAppChat;
