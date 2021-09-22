import React from "react";





function Practice (){
  const date = new Date(2021,8,30,1);
  var wish = date.getHours();
  const cssStyle = {};
  if( wish>= 1 && wish <12){
  wish = 'Good Morning';
  cssStyle.color = 'green';
  }else if(wish>=12 && wish < 19){
  wish = "Good Afternoon";
  cssStyle.color = "orange"
  }else{
  wish= 'Good Night';
  cssStyle.color = "black"}

  return(
    <>
        <div className="container">
            <h1>Hello sir, <span style={cssStyle}> {wish}</span></h1>
        </div>  
    </>
  )
}
export default Practice;