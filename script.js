  //1.display number in text box
  function displayNum(num){
   result.value +=num;
   console.log(num);
}

//2. clear text box
function clearBox(){
result.value="";
}

//3. evaluate expression
function evaluateExpression(){
 {
    expression=result.value;//3+4 result.value
    output=eval(expression);
    result.value=output;
     console.log(result.value);
 }
//other simple method without other variable

result.value=eval(result.value);
}


//4. remove last item from the text box
function removeLastItem(){
   currentExpression=result.value;
   result.value=currentExpression.slice(0,-1);

}