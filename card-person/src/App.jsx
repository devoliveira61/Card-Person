import React from "react";
import AnimatedCursor from "react-animated-cursor";
import "./App.scss";

function App() {
  return (
    <div className="app">
      
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="229, 229, 229"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      
      <div className="box__principal">
        <div className="infos">
          <img src="./src/img/minha-foto.png" alt="Foto de Daniel" />
          <div className="text">
            <h1>Daniel Oliveira</h1>
            <span>Desenvolvedor Full-Stack</span>
          </div>
        </div>
        <div className="contacts">
          <ul>
            <li>
              <img src="./src/img/localização.png" alt="Icone de Localização" />
              <span>Brasília, DF</span>
            </li>
            <li>
              <img src="./src/img/empresa.png" alt="Icone de uma Empresa" />
              <span>Que tal ser da sua equipe?</span>
            </li>
            <li>
              <img src="./src/img/github.png" alt="" />
              <a href="https://github.com/devoliveira61" target="_blank"><span>devoliveira61</span></a>
            </li>
            <li>
              <img src="./src/img/email.png" alt="" />
              <a href="malito:danieldoliveiraddjob@gmail.com" target="_blank"><span>danieldoliveiraddjob@gmail.com</span></a>
            </li>
          </ul>
        </div>
        <div className="tecnology">
          <span>Tecnologias</span>
          <div className="skills">
            <img src="./src/img/html.png" alt="HTML" />
            <img src="./src/img/css.png" alt="CSS" />
            <img src="./src/img/javascript.png" alt="JavaScript" />
            <img src="./src/img/typescript.png" alt="TypeScript" />
            <img src="./src/img/java.png" alt="Java" />
            <img src="./src/img/node.png" alt="Node" />
            <img src="./src/img/react.png" alt="React" />
            <img src="./src/img/tail.png" alt="Tailwind CSS" />
            <img src="./src/img/mongodb.png" alt="MongoDB" />
            <img src="./src/img/firebase.png" alt="Firebase" />
            <img src="./src/img/oracle.png" alt="Oracle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
