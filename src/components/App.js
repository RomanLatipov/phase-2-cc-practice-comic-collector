import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import { useState, useEffect } from "react";

function App() {

  const [comics, setComics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8004/comics")
    .then(res => res.json())
    .then(comics => setComics(comics))
  }, [])

  function createComic(title, issue, image, description) {
    fetch('http://localhost:8004/comics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          title: title, 
          issue: issue, 
          image_url: image, 
          description: description
        })
    })
    .then( res => res.json() )
    .then( newComic => setComics( [...comics, newComic] ) )
  }
  function deleteComic(id) {
    fetch('http://localhost:8004/comics/'+id, { 
      method: 'DELETE' })
    .then()
  }

  const displayComics = comics.map(comic => <ComicsContainer comic={comic} deleteComic={deleteComic}/>);
  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          {/* <ComicsContainer /> */}
          {displayComics}
        </div>

        <div className="sidebar">
          <ComicForm createComic={createComic}/>
        </div>

      </div>


    </div>
  );
}

export default App;
