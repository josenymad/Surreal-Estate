import axios from "axios";

const postFavourite = async (favouriteProperty, setPropertyKey) => {
  const endpoint = "http://localhost:3000/api/v1/Favourite";

  try {
    await axios.post(endpoint, favouriteProperty);
    setPropertyKey(favouriteProperty.propertyListing);
  } catch (error) {
    setPropertyKey(error);
  }
};

export default postFavourite;
