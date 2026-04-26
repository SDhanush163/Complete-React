import { useCallback, useRef, useState } from "react";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces";
import DeleteConfirmation from "./components/DeleteConfirmation";
import ErrorPage from "./components/ErrorPage";
import Modal from "./components/Modal";
import Places from "./components/Places";
import useFetch from "./hooks/useFetch";
import { fetchUserPlaces, updateUserPlaces } from "./http";

const App = () => {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const {
    data: userPlaces,
    setData: setUserPlaces,
    error,
    isFetching,
  } = useFetch(fetchUserPlaces, []);

  const handleStartRemovePlace = (place) => {
    setModalIsOpen(true);
    selectedPlace.current = place;
  };

  const handleStopRemovePlace = () => {
    setModalIsOpen(false);
  };

  const handleSelectPlace = async (selectedPlace) => {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) prevPickedPlaces = [];
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id))
        return prevPickedPlaces;
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || "Failed to update places",
      });
    }
  };

  const handleRemovePlace = useCallback(async () => {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id),
    );
    try {
      await updateUserPlaces(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id),
      );
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || "Failed to delete places",
      });
    }

    setModalIsOpen(false);
  }, [userPlaces, setUserPlaces]);

  const handleError = () => {
    setErrorUpdatingPlaces(null);
  };

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <ErrorPage
            title="An error occurred!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && (
          <ErrorPage title="An error occurred!" message={error.message} />
        )}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            loadingText="Fetching your places..."
            isLoading={isFetching}
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
};

export default App;
