import React, { useState } from "react";
import Modal from "react-modal";
import StarRatingComponent from "react-star-rating-component";
import './Add.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: '40%',
    transform: "translate(-50%, -50%)",
    color: 'red',
    
  },

};


Modal.setAppElement("#root");

function Add({ submitMovies }) {
  

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  function setModalIsOpenToTrue() {
    setModalIsOpen(true);
  }
  function setModalIsOpenToFalse() {
    setModalIsOpen(false);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  const [addMovie, setAddMovie] = useState({
    title: "",
    description: "",
    rating: 0,
    poster: "",
  });
  const changemovie = (e) => {
    setAddMovie({
      ...addMovie,
      [e.target.name]: e.target.value,
    });
  };
  const handleNewrate = (newrate) => {
    
        setAddMovie({...addMovie,rating:newrate})
  };
  

  return (
    <div className="add-movie">
      <div className="heading">
      <button onClick={setModalIsOpenToTrue}>Add your movie</button>
      </div>

      <div className="modal-movie">
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <label>Title</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={addMovie.title}
          onChange={changemovie}
          
        />
        <br />
        <label>URl</label>
        <br />
        <input
          type="text"
          name="poster"
          placeholder="poster Url"
          defaultValue={addMovie.poster}
          onChange={changemovie}
          
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          name="description"
          placeholder="description"
          defaultValue={addMovie.description}
          onChange={changemovie}
          
        />
        <br />
        <label>Rating</label>
        <br />
        <StarRatingComponent
          count={5}
          onStarClick={handleNewrate}
        //   onChange={(newrate)=>
        //     setAddMovie({...addMovie,rating:newrate})
        // }
          size={24}
          activeColor="#ffd700"
        />
    
        <button
          onClick={() => {
            submitMovies(addMovie);
            setAddMovie({ title: "", description: "", rating: "", poster: "" });
            {
              setModalIsOpenToFalse();
            }
          }}
        >
          Add
        </button>
        <button onClick={closeModal}>close</button>
      </Modal>
      </div>
      
    </div>
  );
}

export default Add;
