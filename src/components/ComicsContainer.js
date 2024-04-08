import Comic from "./Comic"

function ComicsContainer({comic, deleteComic}) {
  return (
    <>
      <Comic id={comic.id} title={comic.title} issue={comic.issue} img={comic.image_url} deleteComic={deleteComic}/>
    </>
  )

}

export default ComicsContainer
