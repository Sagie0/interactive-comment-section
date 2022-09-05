import './Reply.css'

const Reply = ({replies}) => {
    console.log(replies[0]);
  return (
    <div className="replies-list">
        {replies.map((replies) => ( 
          <div className="replies-card">           
            <div className="replies-counter">
                <img src="" alt="" className="plus" />
                <a href="" className="count"></a>
                <img src="" alt="" className="minus" />
            </div>
            <div className="replies-main" key={replies.id}>
                <div className="replies-header">
                    <img src="" alt="" />
                    <h5 className="username">{replies.user.username}</h5>
                    <p className="created-at">{replies.createdAt}</p>
                    <p className="reply" onClick={}>Reply</p>
                </div>
                <div className="replies-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos dolorum facilis quaerat aliquam explicabo voluptate aliquid architecto! Modi, blanditiis.</p>
                </div>
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default Reply