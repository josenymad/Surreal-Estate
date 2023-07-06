import axios from "axios";

const getProperties = async (setProperties, setAlert, search) => {
  let endpoint = "http://localhost:3000/api/v1/PropertyListing";

  if (search) {
    endpoint = `http://localhost:3000/api/v1/PropertyListing${search}`;
  }

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
