import { useRef, useState } from "react";
import logoImg from "./assets/logo.png";
import DeleteConfirmation from "./components/DeleteConfirmation";
import Modal from "./components/Modal";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";

const App = () => {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);

  const handleRemovePlace = (id) => {
    modal.current.open();
    selectedPlace.current = id;
  };

  const handleSelectPlace = (id) =>
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

  const hanldeConfirmRemove = () => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    modal.current.close();
  };

  const handleCancelRemove = () => modal.current.close();

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleCancelRemove}
          onConfirm={hanldeConfirmRemove}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>Vacation Wishlist</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
};

export default App;
