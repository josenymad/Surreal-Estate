import axios from "axios";

const getProfile = async (user, setProfile, setAlert) => {
  if (user) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      );
      setProfile(response.data);
    } catch (error) {
      setAlert({
        message: "",
        isSuccess: false,
      });
    }
  }
};

export default getProfile;
