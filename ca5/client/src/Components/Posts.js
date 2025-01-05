import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../Features/PostSlice";
import { Table } from "reactstrap";
import moment from "moment"

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="postsContainer">
            <Table className="table table-striped">
        <thead></thead>
        <tbody>
          {posts?.map((post) => (
            <tr key={post._id}>
              {/* Ensure to add a unique key for each row */}
              <td>{post.email}</td>
              <td>
                <p>{moment(post.createdAt).fromNow()}</p>
                {post.postMsg}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div> /* End of posts */
  );
};

export default Posts;
