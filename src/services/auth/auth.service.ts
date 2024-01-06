import { supabase } from "../../config/supabaseClient";
import { LoginWithMagicLinkParams } from "./auth.service.types";

export const loginWithMagicLink = async (config: LoginWithMagicLinkParams) => {
  const { email } = config;
  try {
    const response = await supabase.auth.signInWithOtp({
      email,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: true,
        emailRedirectTo: "https://retokds.vercel.app/orders",
      },
    });
    if (response.error) {
      throw response.error;
    }
    return response.data;
  } catch (e) {
    const error = e as Error;
    alert(error.message);
  }
};

export const signOut = async () => {
  try {
    const response = await supabase.auth.signOut();
    if (response.error) {
      throw response.error;
    }
  } catch (error) {
    console.log(error);
  }
};