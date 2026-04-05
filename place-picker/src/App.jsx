import { useCallback, useEffect, useRef, useState } from "react";
import logoImg from "./assets/logo.png";
import DeleteConfirmation from "./components/DeleteConfirmation";
import Modal from "./components/Modal";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from "./data";
import { sortPlacesByDistance } from "./loc";

const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds?.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id),
);

const App = () => {
  const selectedPlace = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState(storedPlaces);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setAvailablePlaces(
        sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude,
        ),
      ),
    );
  }, []);

  const handleSelectPlace = (id) => {
    setSelectedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1)
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds]),
      );
  };

  const handleRemovePlace = (id) => {
    setModalOpen(true);
    selectedPlace.current = id;
  };

  const handleConfirmRemove = useCallback(() => {
    setSelectedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    setModalOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)),
    );
  }, []);

  const handleCancelRemove = () => setModalOpen(false);

  return (
    <>
      <Modal open={modalOpen} onClose={handleCancelRemove}>
        <DeleteConfirmation
          onCancel={handleCancelRemove}
          onConfirm={handleConfirmRemove}
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
          places={selectedPlaces}
          onSelectPlace={handleRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={"Sorting places by distance..."}
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
};

export default App;
