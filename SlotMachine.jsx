import React from "react";
import "./slotMachine.css";

const SlotM = (props) =>{
    let x = props.x;
    let y = props.y;
    let z= props.z;
    
    if((x===y) && (y===z)){
       return(
           <>
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is Matching.</h1>
                <hr />
            </div>
           </>
       )
    }else{
        return(
            <>
             <div className="slot_inner">
                 <h1>{x} {y} {z}</h1>
                 <h1>This is  not Matching.</h1>
                 <hr />
             </div>
            </>
        )
    }
}

const SlotMachine = ()=>{
    return(
        <>
            <h1 className="heading">đ° welcome to <span style={{fontWeight:"bold", background:"#fff"}}>Slot Machine game</span> đ°</h1>
            <div className="slot_machine">
                <SlotM x= "đ" y="đ" z="đ"/>
                <hr/>
                <SlotM x= "đ" y="đ" z="đ"/>
                <hr />
                <SlotM x= "đ" y="đ" z="đ"/>
                <hr />
                <SlotM x= "đ" y="đŠī¸" z="đ"/>
                <hr />
                <SlotM x= "đ" y="đ" z="đ"/>
                <hr />
            </div>

        </>

    )

}

export default SlotMachine;