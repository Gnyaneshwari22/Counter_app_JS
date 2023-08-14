
const countvalue=document.getElementById('counter');

const  increment = ()=>{
    //get the string value and convert to integer
    let value=parseInt(countvalue.innerText);

    //increment the value
    value=value+1;

    //save it on UI
    countvalue.innerText=value;


};

const  decrement= ()=>{
    let value=parseInt(countvalue.innerText);
     //decrement the value
    value=value-1;

    countvalue.innerText=value;
};