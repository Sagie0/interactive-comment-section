import { useState } from 'react'
import './Commentlist.css'


const Commentlist = ({comments}) => {
  const [toggle, SetToggle]= useState(false)

  const toggleReply = () => {
    SetToggle(!toggle)
    console.log(toggle, 'toggleReply');
  }


  return (
    <div className="comment-list">
        {comments.map((comment) => ( 
          <div className="comments-card">           
            <div className="comments-counter">
                <img src="" alt="" className="plus" />
                <a href="" className="count"></a>
                <img src="" alt="" className="minus" />
            </div>
            <div className="comments-main" key={comment.id}>
                <div className="comments-header">
                    <img src="" alt="" />
                    <h5 className="username">{comment.user.username}</h5>
                    <p className="created-at">{comment.createdAt}</p>
                    <p className="reply" onClick={toggleReply}>Reply</p>
                </div>
                <div className="comments-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos dolorum facilis quaerat aliquam explicabo voluptate aliquid architecto! Modi, blanditiis.</div>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Commentlist