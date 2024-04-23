let currentnum='';

function appendNumber(number){
  document.forms['clc'].elements['display'].value+=number;
}

function appendOperator(operator){
  let currentValue=document.forms['clc'].elements['display'].value;
  if(currentValue.length>0 && isOperator(currentValue[currentValue.length-1])){
    currentValue=currentValue.substring(0,currentValue.length-1);
  }
  document.forms['clc'].elements['display'].value=currentValue+operator;
  currentnum='';
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

function clearDisplay(){
  document.forms['clc'].elements['display'].value='';
}

function calcResult(){
  const result=eval(document.forms['clc'].elements['display'].value);
  document.forms['clc'].elements['display'].value = result;
}