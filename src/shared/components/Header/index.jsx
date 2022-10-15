import { Container, Input } from "./styled";
import { Search } from "@mui/icons-material";

export const Header = () => {
  return (
    <Container>
      <div className="menu">
        <p>Codelandia</p>
        <p>blog</p>
      </div>
      <div className="menu buscar">
        <Search className="lupa" />
        <Input placeholder="Pesquisa no blog" />
      </div>
    </Container>
  );
};
