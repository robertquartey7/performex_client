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
