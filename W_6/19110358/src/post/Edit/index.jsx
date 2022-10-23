import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getData, setData } from "../../Helper";

const Create = () => {
  const nav = useNavigate();
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const data = getData() || [];
    const item = data.find((post) => post.id == id);
    setTitle(item.title);
    setContent(item.content);
  }, [id]);

  const onEditPost = () => {
    if (title && content) {
      let posts = getData() || [];
      const oldPost = posts.find((post) => post.id == id);
      const index = posts.findIndex((item) => item.id == id);
      const newPost = {
        id: +id,
        title,
        content,
        comment: oldPost.comment,
      };

      posts[index] = newPost;
      console.log(posts);
      setData(posts);
      nav("/");
    } else {
      alert("Title and Content are required");
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
          <button className="btn btn-primary" onClick={onEditPost}>
            Save
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
