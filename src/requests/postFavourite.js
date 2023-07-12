import axios from "axios";

const postFavourite = async (favouriteProperty, setHeartAlert) => {
  const endpoint = "http://localhost:3000/api/v1/Favourite";

  try {
    await axios.post(endpoint, favouriteProperty);
    setHeartAlert({ message: "Saved", isSuccess: true });
  } catch (error) {
    setHeartAlert({
      message: "Save",
      isSuccess: false,
    });
  }
};

export default postFavourite;
