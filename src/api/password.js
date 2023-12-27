import axios from "axios";
export async function requestReset(email) {
  try {
    const resetPassword = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/request-reset`,
      {
        email,
      }
    );
    console.log(resetPassword);
    return resetPassword;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function resetPassword({ token, password }) {
  try {
    const resetPassword = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reset-password/${token}`,
      {
        password,
      }
    );
      
    return resetPassword;
  } catch (error) {
    return error;
  }
}
