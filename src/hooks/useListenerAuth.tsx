import { useEffect } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../config/store.config";

const useListenAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        dispatch({ type: "SET_SESSION", payload: session });
        navigate("/");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") return;
      const currentUser = session?.user;
      if (currentUser) {
        navigate("/");
      }
      if (!currentUser) {
        dispatch({ type: "SET_SESSION", payload: undefined });
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch, navigate]);
};

export default useListenAuth;
