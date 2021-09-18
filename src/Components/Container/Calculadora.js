import React, { useState } from "react";
import "./App.css";

const Calculadora = () => {
  const [resultado, setResultado] = useState("");

  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.name));
  };

  const eliminar = () => {
    setResultado("");
  };

  const retroceso = () => {
    setResultado(resultado.slice(0, resultado.length - 1));
  };

  const finalResult = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado("Error");
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={resultado} />
        </form>
        <div className="keypad">
          <button className="highlight" onClick={eliminar} id="clear">
            Eliminar
          </button>
          <button className="highlight" onClick={retroceso} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={finalResult} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculadora;
