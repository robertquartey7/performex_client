import axios from "axios";

export async function login(email, password) {
  try {
    const user = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      {
        email,
        password,
      }
    );
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function register(email, password) {
  try {
    const user = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
      {
        email,
        password,
      }
    );

    return user;
  } catch (error) {
  
    return error;
  }
}
