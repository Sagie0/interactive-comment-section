import { useState, useEffect } from "react"
import Commentlist from "../src/Commentlist"
// import './Home.css'

const Home = () => {
    const [comments, setComments] = useState(null)
    // const [comments, setComments] = useState(null)

    useEffect(()=>{
        // fetch('http://localhost:8000/currentUser'),
        fetch('http://localhost:8000/comments')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        setComments(data)
    })
    }, [])


  return (
    <div className='home'>
        {comments && <Commentlist comments={comments}/>}
    </div>
  )
}

export default Home