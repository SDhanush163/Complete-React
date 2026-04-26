import useFetch from "../hooks/useFetch.js";
import { fetchAvailablePlaces } from "../http.js";
import { sortPlacesByDistance } from "../loc.js";
import ErrorPage from "./ErrorPage.jsx";
import Places from "./Places.jsx";

const fetchSortedPlaces = async () => {
  const places = await fetchAvailablePlaces();
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude,
      );

      resolve(sortedPlaces);
    });
  });
};

const AvailablePlaces = ({ onSelectPlace }) => {
  const {
    data: availablePlaces,
    isFetching,
    error,
  } = useFetch(fetchSortedPlaces, []);

  if (error)
    return <ErrorPage title="An error occurred!" message={error.message} />;

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
};
export default AvailablePlaces;
