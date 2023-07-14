import axios from "axios";

const getFavourites = async (propertyId, setFavourite) => {
  const endpoint = "http://localhost:3000/api/v1/Favourite";
  let favourites;

  try {
    const response = await axios.get(endpoint);
    favourites = response.data.find(
      (property) => propertyId === property.propertyListing
    );
    setFavourite(favourites.propertyListing);
  } catch (error) {
    setFavourite(error);
  }

  return favourites;
};

export default getFavourites;
