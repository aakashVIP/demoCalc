import React from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
import ClickButton from './Button';

class Calculator extends React.Component{
     constructor(){
         super();
         this.state={
            question :'',
            answer:'',
         };
     }
     
      
handleClick=(event)=>{
let stateValue = event.target.value;
switch(stateValue){
    case '=':{
        let value='';
        try{
            let question= this.state.question;
            value= eval(question);    
        }catch(e){
            value='Unexpected Math Error';
        }
        if(value===''){
            value='Math Error';
        }
        this.setState({
             answer:value,
             question:''           
        });
        break;
    }
    case 'Clear':{
        this.setState({
            question:'',
            answer:''
        })
        break;
    }
    case 'Del':{
        let value= this.state.question;
        let upDateValue= value.substring(0,value.length-1);
        this.setState({
            question: upDateValue
        })
        break;
    }
    default:{
        this.setState({
            question: this.state.question+=stateValue
        });
        break;
    }
}

}
render(){
    return(
      <div className ="frame">
          <CalculatorTitle value="GeeksforGeeks Calculator"/>
          <div className="mainCalc">
              <OutputScreen value={this.state}/>
              <div className="button row">
                  <ClickButton label={"Clear"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"Del"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"."}  onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"/"} onClick={(event)=>this.handleClick(event)}/>
              </div>
              <div className="button row">
                  <ClickButton label={"7"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"8"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"9"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"*"} onClick={(event)=>this.handleClick(event)}/>
              </div>
              <div className="button row">
                  <ClickButton label={"4"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"5"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"6"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"-"} onClick={(event)=>this.handleClick(event)}/>
              </div>
              <div className="button row">
                  <ClickButton label={"1"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"2"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"3"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"+"} onClick={(event)=>this.handleClick(event)}/>
              </div>
              <div className="button row">
                  <ClickButton label={"0"} onClick={(event)=>this.handleClick(event)}/>
                  <ClickButton label={"="} onClick={(event)=>this.handleClick(event)}/>
              </div>
          </div>
      </div>

    );
}

    newMethod() {
        return this.handleClick;
    }
}
export default Calculator;