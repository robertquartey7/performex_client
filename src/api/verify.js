// router.get("/request_email_verification", requestEmailVerification);
// router.get("/verify_email/:id", verifyEmail);
import axios from "axios";

export async function requestEmailVerification(email) {
  try {
    const requestVerification = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/request_email_verification`,
      {
        email,
      }
    );

    return requestVerification;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function verifyEmail(token) {
  try {
    const verifiedEmail = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/request_email_verification/${token}`
    );

    return verifiedEmail;
  } catch (error) {
    console.log(error);
    return error;
  }
}
