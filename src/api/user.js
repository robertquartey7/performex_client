import axios from "axios";

export async function getUser(userId) {
  try {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}`
    );

    if (user.status === 200) {
      return user.data;
    }
  } catch (error) {
    return error;
  }
}


