import React from "react";

function Calcul(){
    function add(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function multi(a,b){
        return a*b;
    }
    function div(a,b){
        return a/b;
    }

    return(
    <ul>
        <li>the add of {add(40,4)}</li>
        <li>the sub of {sub(40,4)}</li>
        <li>the multi of {multi(40,4)}</li>
        <li>the div of {div(40,4)}</li>
    </ul>
    )
}




export default Calcul;