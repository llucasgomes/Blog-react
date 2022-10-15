import { Container } from "./styled";
import { Favorite, FavoriteBorderRounded } from "@mui/icons-material";
import { useState } from "react";

export const CardBasic = ({ date, fav, title, subject }) => {
  const [favorite, setFavorite] = useState(fav);
  function handleFavorite() {
    setFavorite(!favorite);
  }

  return (
    <>
      <Container>
        <div className="date-favorite">
          <p className="date"> {date}</p>

          {favorite === true ? (
            <Favorite className="favorite-cheked" onClick={handleFavorite} />
          ) : (
            <FavoriteBorderRounded
              className="favorite"
              onClick={handleFavorite}
            />
          )}
        </div>
        <h2 className="title">{title}</h2>
        <p className="subject">{subject}</p>
      </Container>
    </>
  );
};
