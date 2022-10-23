import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData, setData } from "../../Helper";

const View = () => {
  let { id } = useParams();
  let post = (getData() || []).find((item) => item.id == id);

  const [comment, setComment] = useState("");

  const onAddNewComment = () => {
    if (comment) {
      const data = getData();
      let index = data.findIndex((item) => (item.id == id));
      let oldComments = post.comment || [];
      const newComment = {
        id: post.comment.length + 1,
        comment: comment,
      };
      oldComments.push(newComment);
      post.comment = oldComments;

      data[index] = post;
      setComment("");
      setData(data);
    } else {
      alert("Add comment first");
    }
  };

  if (!post) return <p>Post {id} not found</p>;
  return (
    <div className="view">
      <div className="post">
        <div className="title mb-3">
          <h2>{post.title}</h2>
        </div>
        <div className="content">{post.content}</div>
      </div>
      <div className="comments">
        <h4>Comment</h4>
        <div className="old-comment">
          {(post.comment || []).map((item, index) => (
            <div className="card" key={index}>
              <div className="card-body">{item.comment}</div>
            </div>
          ))}
        </div>
        <div className="new-comment">
          <div className="form-group">
            <div className="input-comment">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                class="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="Enter Your Comment"
              />
            </div>
          </div>
          <div className="form-group button-form">
            <button className="btn btn-primary" onClick={onAddNewComment}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
