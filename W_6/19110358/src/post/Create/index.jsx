import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getData, setData } from "../../Helper";

const Create = () => {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onAddNewPost = () => {
    if (title && content) {
      const posts = getData() || [];
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        comment: [],
      };

      posts.push(newPost);
      setData(posts);
      nav("/");
    } else {
      alert("Title and Content Are Required");
    }
  };

  return (
    <div className="form-create-post">
      <h3 className="mb-3">Create New Post</h3>
      <div className="w-75">
        <div class="form-group row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            Title
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="Enter Title"
            />
          </div>
        </div>

        <div class="form-group row mb-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            Content
          </label>
          <div class="col-sm-10">
            <textarea
              type="email"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="Enter Content"
              cols="5"
              rows={10}
            />
          </div>
        </div>

        <div className="form-group button-form">
          <button className="btn btn-primary" onClick={onAddNewPost}>
            Create Post
          </button>

          <Link to="/">
            <button className="btn btn-secondary"> Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Create;
