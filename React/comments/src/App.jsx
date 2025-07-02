import { useState } from 'react'
import CommentSection from '../components/CommentSection'
import CreateCommentSection from '../components/CreateCommentSection'
import './App.css'

function App() {
  const [comments, setComments] = useState([
    {userName: "user", rate: "5", text: "This is a comment",},
    {userName: "user2", rate: "8", text: "This is another comment"},
    {userName: "user3", rate: "10", text: "This is a third comment"}
  ])

  function createItem(data) {
    console.log(data);

    const newComment = {
      userName: "anonymous",
      rate: data.rate,
      text: data.text,
      date: new Date().toLocaleTimeString()
    }
    setComments(prevComments => [...prevComments, newComment])
  }

  return (
    <>
      <CreateCommentSection onCreate={createItem} />
      <CommentSection comments={comments} />
    </>
  )
}

export default App
