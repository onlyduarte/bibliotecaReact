import React from "react";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Card from "./components/Card";
import background from "./images/front-end.jpg";
import background2 from "./images/back-end.jpg";
import background3 from "./images/Tecnologia.jpg";
import background4 from "./images/Investimentos.jpg";
import background5 from "./images/Bitcoin.jpg";
import background6 from "./images/Marketing.jpg";

const App = () => {
  return (
    <>
      <div className="principal">
        <Nav />
        <Info />
        <Card
          conteudo={{
            titulo: "Frontend developer",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi deleniti neque. Vel, consequatur. Quasi accusantium.",
              img: `${background}`,
            titulo2: "Backend Developer",
            desc2: "Step by step guide to becoming a modern frontend developer in 2023",
            img2: `${background2}`,
            titulo3: "Tecnologia",
            desc3: "Step by step guide to becoming a modern frontend developer in 2023",
            img3: `${background3}`,
          }}
        />
        <Card
          conteudo={{
            titulo: "Investimentos",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi deleniti neque. Vel, consequatur. Quasi accusantium at odit temporibus magni quam praesentium eum, perspiciatis, ducimus soluta doloremque earum non reprehenderit.",
              img: `${background4}`,
            titulo2: "Bitcoin",
            desc2: "Step by step guide to becoming a modern frontend developer in 2023",
            img2: `${background5}`,
            titulo3: "Marketing",
            desc3: "Step by step guide to becoming a modern frontend developer in 2023",
            img3: `${background6}`,
          }}
        />
      </div>
    </>
  );
};

export default App;
