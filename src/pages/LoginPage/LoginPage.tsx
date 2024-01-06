import { useState } from "react";
import { useLoginWithMagicLink } from "../../services/auth/auth.service.hook";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutateAsync: loginWithMagicLink } = useLoginWithMagicLink();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await loginWithMagicLink({
      email,
    });
    setLoading(false);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Write your email:</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@site.com"
            required
          />
          <div>
            <button disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
