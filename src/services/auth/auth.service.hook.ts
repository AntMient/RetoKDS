import { useMutation } from "@tanstack/react-query";
import { loginWithMagicLink, signOut } from "./auth.service";
import { LoginWithMagicLinkResponse } from "./auth.service.types";
import { LoginWithMagicLinkParams } from "./auth.service.types";

export const useLoginWithMagicLink = () => {
  return useMutation<
    LoginWithMagicLinkResponse["data"],
    Error,
    LoginWithMagicLinkParams
  >({
    mutationFn: (config) => loginWithMagicLink(config),
  });
};

export const useSignOut = () => {
  return useMutation<void, Error, void>({
    mutationFn: signOut,
  });
};