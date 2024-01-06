import { useState } from "react";
import { useLoginWithMagicLink } from "../../services/auth/auth.service.hook";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Form = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 20px;
  width: 15rem;
`;

const Text = styled.label`
  color: #444;
  font-size: 24px;
  padding-bottom: 16px;
`;

const UserInput = styled.input`
  height: 40px;
  padding: 0 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #444;
  font-size: 16px;

  :focus {
    border-color: #ddd;
  }

  :hover {
    border-color: #ddd;
  }
`;

const Button = styled.button`
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #11519b;
    color: white;
  }
`;

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Text>Por favor inicia sesión</Text>
        <UserInput
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@pagina.com"
          required
        />

        <Button disabled={loading}>Entrar</Button>

        {/* <Link to="/register">Não tenho cadastro</Link> */}
      </Form>
    </Container>
  );
}

export default LoginPage;
