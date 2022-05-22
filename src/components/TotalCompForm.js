import { useState } from "react";

function TotalCompForm(){
    const [totalComp, setTotalComp] = useState(null);
    const [base, setBase] = useState("");
    const [annualBonus, setAnnualBonus] = useState("");
    const [stock, setStock] = useState("");
    const [other, setOther] = useState("");
    const [signOn, setSignOn] = useState("");
    const [compareArr,setCompareArr] = useState([]);
    function resetHandler() {
      setTotalComp(null);
      setBase("");
      setAnnualBonus("");
      setStock("");
      setOther("");
      setSignOn("");
    }
    function saveHandler() {
      setCompareArr(prev => prev.concat(totalComp))
      console.log(compareArr);
      setTotalComp(null);
      setBase("");
      setAnnualBonus("");
      setStock("");
      setOther("");
      setSignOn("");
    }
  
    function baseHandler(e) {
      const baseInput = e.target.value;
      if (baseInput > 0) {
        setBase(baseInput);
        if(totalComp){
          setTotalComp( prev => {return{...prev,base:+baseInput}})
        } else { // if totalComp is null
          setTotalComp({base:+baseInput})
        }
      } else if(baseInput === ''){
        setBase('')
        setTotalComp(prev => { 
            let prevTotal = prev 
            console.log(prevTotal) 
            delete prevTotal.base
            console.log(prevTotal) 
            return prevTotal
        })
      }
    }
    function annualBonusHandler(e) {
      const annualBonusInput = e.target.value;
      if (annualBonusInput > 0) {
        setAnnualBonus(annualBonusInput);
        if(totalComp){
          setTotalComp( prev => {return{...prev,annualBonus:+annualBonusInput}})
        } else { // if totalComp is null
          setTotalComp({annualBonus:+annualBonusInput})
        }
      }else if(annualBonusInput === ''){
        setAnnualBonus('')
        setTotalComp(prev => { 
            let prevTotal = prev 
            console.log(prevTotal) 
            delete prevTotal.annualBonus
            console.log(prevTotal) 
            return prevTotal
        })
      }
    }
    function stockHandler(e) {
      const stockInput = e.target.value;
      if (stockInput > 0) {
        setStock(stockInput);
        if(totalComp){
          setTotalComp( prev => {return{...prev,stock:+stockInput}})
        } else { // if totalComp is null
          setTotalComp({stock:+stockInput})
        }
      }else if(stockInput === ''){
        setStock('')
        setTotalComp(prev => { 
            let prevTotal = prev
            console.log(prevTotal) 
            delete prevTotal.stock
            console.log(prevTotal) 
            return prevTotal
        })
      }
    }
    function signOnHandler(e) {
      const signOnInput = e.target.value;
      if (signOnInput > 0) {
        setSignOn(signOnInput);
        if(totalComp){
          setTotalComp( prev => {return{...prev,signOn:+signOnInput}})
        } else { // if totalComp is null
          setTotalComp({signOn:+signOnInput})
        }
      }else if(signOnInput === ''){
        setSignOn('');
        setTotalComp(prev => { 
            let prevTotal = prev 
            delete prevTotal.signOn
            return prevTotal
        })
      }
    }
    function otherHandler(e) {
      const otherInput = e.target.value;
      if (otherInput > 0) {
        setOther(otherInput);
        if(totalComp){
          setTotalComp( prev => {return{...prev,other:+otherInput}})
        } else { // if totalComp is null
          setTotalComp({other:+otherInput})
        }
      } else if(otherInput === ''){
        setOther('');
        setTotalComp(prev => { 
            let prevTotal = prev 
            delete prevTotal.other
            return prevTotal
        })
      }
    }
    let totalCompDisplay;
    if(totalComp){
      totalCompDisplay = 'total: '+Object.values(totalComp).reduce((acc,el)=> acc+el,0) + 'k'
    }
  
    return (
        <div className="input-box">
  <h1 value={base} className="header">
    Total Compensation
  </h1>

  <h2 className="total-comp">{totalCompDisplay}</h2>
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
  <button onClick={saveHandler}>save to compare</button>
</div>
    )
}

export default TotalCompForm;