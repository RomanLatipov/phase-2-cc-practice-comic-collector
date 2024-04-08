import { useState } from "react";

function Comic({id, title, issue, img, deleteComic}) {
  function Delete(id) {
    document.getElementById(`${id}`).remove();
  }
  const [toggleInfo, setSwitch] = useState({display: "none"});
  const [toggleImg, setImage] = useState({display: "inline"})

  function handleToggle1(event) {
    setSwitch({display: "inline"});
    setImage({display: "none"});
  }
  function handleToggle2(event) {
    setSwitch({display: "none"});
    setImage({display: "inline"});
  }
  return (

    <div id={id} className="comic-item">

      {/* The image should render if the details aren't displayed */}
      <img id={"img"} src={img} alt={"Comic Issue Image"} style={toggleImg} onClick={handleToggle1}/>

      {/* The details should render if the image isn't displayed */}
      <div id={"info"} style={toggleInfo} onClick={handleToggle2}>
        <h3>{title}</h3>
        <h4>{issue}</h4>
        <button id={id} onClick={event => {
          Delete(event.target.id)
          deleteComic(event.target.id);
          }}>Remove</button>
      </div>

    </div>
  )

}

export default Comic
