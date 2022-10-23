import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData, setData } from "../../Helper";

const Views = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const _data = getData() || [];
    setPosts(_data);
  }, []);

  const onDeletePost = (e, id) => {
    e.preventDefault();
    const _data = posts.filter((post) => post.id != id);
    setData(_data);
    setPosts(_data);
  };

  return (
    <div className="views">
      <div className="title">All Posts</div>
      {(posts || []).map((item, index) => (
        <div className="show-posts" key={index}>
          <div className="card w-50">
            <div className="card-body">
              <Link className="link" to={`/posts/view/${item.id}`}>
                {item.title}
              </Link>
            </div>
          </div>
          <div>
            <Link to={`/posts/edit/${item.id}`}>
              <button className="btn btn-primary m-3">
                <i class="material-icons">edit</i>
              </button>
            </Link>
            <button
              onClick={(e) => onDeletePost(e, item.id)}
              className="btn btn-secondary"
            >
              <i class="material-icons">delete</i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Views;
