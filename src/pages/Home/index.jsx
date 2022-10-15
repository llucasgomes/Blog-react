// import { Header } from "../../shared/components/Header/styled";

import { CardBasic } from "../../shared/components/Card";
import { Header } from "../../shared/components/Header";
import { Container } from "./styled";
import { Posts } from "../../assets/data/dados";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        {Posts.map((item) => (
          <CardBasic
            key={item.id}
            date={item.date}
            favor={item.favorite}
            title={item.title}
            subject={item.subject}
          />
        ))}
      </Container>
    </>
  );
};
