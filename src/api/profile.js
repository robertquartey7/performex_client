import axios from "axios";

//creating profiles

export async function createRecruiter(userProfileInfo) {
  try {
    const userProfile = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`,
      {
        ...userProfileInfo,
      }
    );

    console.log(userProfile);
    return userProfile;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function createAthlete({
  firstName,
  lastName,
  parentEmail,
  primarySport,
  country,
  dateOfBirth,
  userId,
  userType
}) {
  try {
    const userProfile = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/${userId}`,
      {
        firstName,
        lastName,
        parentEmail,
        primarySport,
        country,
        dateOfBirth,
        userType
      }
    );

    return userProfile;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// get all Profiles
