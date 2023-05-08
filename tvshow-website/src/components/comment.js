import image from "../img/user-icon.png"
const Comment=({comment})=>{
    return(
        <div className="comment">
              <div className="comment-image-container">
                <img className="comment-image-container" src={image} />
              </div>
              <div className="comment-right-part">
                <div className="comment-content">
                  <div className="comment-text">{comment}</div>
                </div>
			</div>
		</div>
    )
}
export default Comment;