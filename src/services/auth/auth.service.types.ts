export interface LoginWithMagicLinkParams {
    email: string;
  }
  
export interface LoginWithMagicLinkResponse {
data: { user: null; session: null; messageId?: string | null } | undefined;
error: Error;
}