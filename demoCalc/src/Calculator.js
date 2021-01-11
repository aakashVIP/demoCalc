import React from 'react';
import calculatorTitle from './CalculatorTitle';
import outputScreen from './OutputScreen';
import clickButton from './Button';

class Calculator extends React.Component{
render(){
    return(
      <div className ="frame">
          <calculatorTitle value="GeeksforGeeks Calculator"/>
          <div class="mainCalc">
              <outputScreen/>
              <div className="button row">
                  <clickButton label={"Clear"}/>
                  <clickButton label={"Del"}/>
                  <clickButton label={"."}/>
                  <clickButton label={"/"}/>
              </div>
              <div className="button row">
                  <clickButton label={"7"}/>
                  <clickButton label={"8"}/>
                  <clickButton label={"9"}/>
                  <clickButton label={"*"}/>
              </div>
              <div className="button row">
                  <clickButton label={"4"}/>
                  <clickButton label={"5"}/>
                  <clickButton label={"6"}/>
                  <clickButton label={"-"}/>
              </div>
              <div className="button row">
                  <clickButton label={"1"}/>
                  <clickButton label={"2"}/>
                  <clickButton label={"3"}/>
                  <clickButton label={"+"}/>
              </div>
              <div className="button row">
                  <clickButton label={"0"}/>
                  <clickButton label={"="}/>
              </div>
          </div>
      </div>

    );
}
}
export default Calculator;