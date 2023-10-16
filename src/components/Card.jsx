import React from "react";
import "./card.css";

const Card = ({conteudo}) => {
  const bg1 = {
      backgroundImage: `url(${conteudo.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',

    }
  const bg2 = {
    backgroundImage: `url(${conteudo.img2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const bg3 = {
    backgroundImage: `url(${conteudo.img3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <>
        <div className="card-container">
          <div className="card" style={bg1}>
            <h1>{conteudo.titulo}</h1>
            <p>
              {conteudo.desc}
            </p>
          </div>
          <div className="card" style={bg2}>
            <h1>{conteudo.titulo2}</h1>
            <p>
              {conteudo.desc2}
            </p>
          </div>
          <div className="card" style={bg3}>
            <h1>{conteudo.titulo3}</h1>
            <p>
              {conteudo.desc3}
            </p>
          </div>
        </div>
    </>
  );
};

export default Card;
