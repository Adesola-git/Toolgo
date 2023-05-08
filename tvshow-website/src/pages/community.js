import React,{ useState }  from "react";
import image from "../img/home_new1.jpg"
import './community.css';
import Comment from "../components/comment";

function Community() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div style={{backgroundImage:`url(${image})`}} className="bckground">
      <h1 className="pageText">Community</h1>
      <form onSubmit={handleSubmit}>
        <label className="pageText">
          Add a comment:
        <textarea placeholder="Type your comment" className="comment-form-textarea" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        </label>
        <button className="comment-form-button" type="submit">Post</button>
      </form>
      <div className="comment-container">
		<h1>Comments</h1>
        {comments.map((comment, index) => (
         
		 <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Community;