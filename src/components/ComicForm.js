import { useState } from "react"

function ComicForm({createComic}) {
  const [img, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [issues, setIssue] = useState("");
  const [desc, setDescription] = useState("");
  return (

    <form className="comic-form" onSubmit={event => {
      event.preventDefault();
      createComic(title, issues, img, desc)
    }}>

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" onChange={event => setImage(event.target.value)}/>

      <label htmlFor="title">Title: </label>
      <input name="title" onChange={event => setTitle(event.target.value)}/>

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" onChange={event => setIssue(event.target.value)}/>

      <label htmlFor="description">Description: </label>
      <input name="description" onChange={event => setDescription(event.target.value)}/>

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
