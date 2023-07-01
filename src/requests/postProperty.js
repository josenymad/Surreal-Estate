import axios from "axios";

const postPropertyDetails = async (data) => {
  const endpoint = "http://localhost:3000/api/v1/PropertyListing";

  try {
    const response = await axios.post(endpoint, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default postPropertyDetails;
