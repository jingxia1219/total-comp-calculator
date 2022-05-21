import "./index.css";
import { useState } from "react";

export default function App() {
  const [totalComp, setTotalComp] = useState("");
  const [base, setBase] = useState("");
  const [annualBonus, setAnnualBonus] = useState("");
  const [stock, setStock] = useState("");
  const [other, setOther] = useState("");
  const [signOn, setSignOn] = useState("");
  function resetHandler() {
    setTotalComp("");
    setBase("");
    setAnnualBonus("");
    setStock("");
    setOther("");
    setSignOn("");
  }
  function calculateHandler() {
    let total = 0;
    if (base !== "") total = +base + total;
    console.log(total);
    if (annualBonus !== "") total = +annualBonus + total;
    console.log(total);
    if (stock !== "") total = +stock + total;
    console.log(total);
    if (other !== "") total = +other + total;
    console.log(total);
    if (signOn !== "") total = +signOn + total;
    console.log(total);
    if (total > 0) setTotalComp("total: " + total + "k");
  }

  function baseHandler(e) {
    const baseInput = e.target.value;
    if (baseInput > 0) {
      setBase(baseInput);
    }
  }
  function annualBonusHandler(e) {
    const annualBonusInput = e.target.value;
    if (annualBonusInput > 0) {
      setAnnualBonus(annualBonusInput);
    }
  }
  function stockHandler(e) {
    const stockInput = e.target.value;
    if (stockInput > 0) {
      setStock(stockInput);
    }
  }
  function signOnHandler(e) {
    const signOnInput = e.target.value;
    if (signOnInput > 0) {
      setSignOn(signOnInput);
    }
  }
  function otherHandler(e) {
    const otherInput = e.target.value;
    if (otherInput > 0) {
      setOther(otherInput);
    }
  }

  let display = (
    <div className="input-box">
      <h1 value={base} className="header">
        Total Compensation
      </h1>

      <h2 className="total-comp">{totalComp}</h2>
      <button onClick={resetHandler}>reset</button>

      <h3>Base salary (in thousand):&nbsp;{base !== "" ? base + "k" : ""} </h3>
      <input
        value={base}
        onChange={baseHandler}
        placeholder="base"
        type="number"
        min="0"
      ></input>

      <h3>
        Annual bonus (in thousand):&nbsp;
        {annualBonus !== "" ? annualBonus + "k" : ""}
      </h3>
      <input
        value={annualBonus}
        onChange={annualBonusHandler}
        placeholder="annual bonus"
        type="number"
        min="0"
      ></input>

      <h3>
        {" "}
        Stock/Option (in thousand):&nbsp;{stock !== "" ? stock + "k" : ""}{" "}
      </h3>
      <input
        value={stock}
        onChange={stockHandler}
        placeholder="stock/option"
        type="number"
        min="0"
      ></input>

      <h3>
        {" "}
        Enter sign on bonus (in thousand):&nbsp;
        {signOn !== "" ? signOn + "k" : ""}{" "}
      </h3>
      <input
        value={signOn}
        onChange={signOnHandler}
        placeholder="sign on bonus"
        type="number"
        min="0"
      ></input>

      <h3>
        {" "}
        Enter other Compensation (in thousand):&nbsp;
        {other !== "" ? other + "k" : ""}{" "}
      </h3>
      <input
        value={other}
        onChange={otherHandler}
        placeholder="other"
        type="number"
        min="0"
      ></input>
      <br />
      <button onClick={calculateHandler}>Calculate</button>
    </div>
  );

  return <>{display}</>;
}
