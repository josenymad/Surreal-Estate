import axios from "axios";

const postPropertyDetails = async (propertyDetails, setAlert) => {
  const endpoint = "http://localhost:3000/api/v1/PropertyListing";

  try {
    await axios.post(endpoint, propertyDetails);
    setAlert({ message: "Property Added!", isSuccess: true });
  } catch (error) {
    setAlert({
      message: "Server error, please try again later",
      isSuccess: false,
    });
  }
};

export default postPropertyDetails;
