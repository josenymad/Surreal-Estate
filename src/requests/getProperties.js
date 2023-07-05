import axios from "axios";

const getProperties = async (setProperties, setAlert) => {
  const endpoint = "http://localhost:3000/api/v1/PropertyListing";

  try {
    const { data } = await axios.get(endpoint);
    setProperties(data);
  } catch (error) {
    setAlert({
      message: "Server error, please try again later",
      isSuccess: false,
    });
  }
};

export default getProperties;
