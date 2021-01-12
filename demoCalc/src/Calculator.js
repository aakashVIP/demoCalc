import React from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
import ClickButton from './Button';

class Calculator extends React.Component{
render(){
    return(
      <div className ="frame">
          <CalculatorTitle value="GeeksforGeeks Calculator"/>
          <div className="mainCalc">
              <OutputScreen/>
              <div className="button row">
                  <ClickButton label={"Clear"}/>
                  <ClickButton label={"Del"}/>
                  <ClickButton label={"."}/>
                  <ClickButton label={"/"}/>
              </div>
              <div className="button row">
                  <ClickButton label={"7"}/>
                  <ClickButton label={"8"}/>
                  <ClickButton label={"9"}/>
                  <ClickButton label={"*"}/>
              </div>
              <div className="button row">
                  <ClickButton label={"4"}/>
                  <ClickButton label={"5"}/>
                  <ClickButton label={"6"}/>
                  <ClickButton label={"-"}/>
              </div>
              <div className="button row">
                  <ClickButton label={"1"}/>
                  <ClickButton label={"2"}/>
                  <ClickButton label={"3"}/>
                  <ClickButton label={"+"}/>
              </div>
              <div className="button row">
                  <ClickButton label={"0"}/>
                  <ClickButton label={"="}/>
              </div>
          </div>
      </div>

    );
}
}
export default Calculator;