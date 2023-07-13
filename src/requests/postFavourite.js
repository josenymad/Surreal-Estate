import axios from "axios";

const postFavourite = async (favouriteProperty, setHeartAlert) => {
  const endpoint = "http://localhost:3000/api/v1/Favourite";

  try {
    await axios.post(endpoint, favouriteProperty);
    setHeartAlert({
      message: "Saved",
      isSuccess: true,
      propertyKey: favouriteProperty.propertyListing,
    });
  } catch (error) {
    setHeartAlert({
      message: error,
      isSuccess: false,
    });
  }
};

export default postFavourite;
