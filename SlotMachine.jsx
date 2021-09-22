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
            <h1 className="heading">🎰 welcome to <span style={{fontWeight:"bold", background:"#fff"}}>Slot Machine game</span> 🎰</h1>
            <div className="slot_machine">
                <SlotM x= "😄" y="😄" z="😄"/>
                <hr/>
                <SlotM x= "😄" y="🎅" z="😄"/>
                <hr />
                <SlotM x= "🎅" y="🎅" z="🎅"/>
                <hr />
                <SlotM x= "😘" y="🛩️" z="🎅"/>
                <hr />
                <SlotM x= "🍌" y="🍌" z="🍌"/>
                <hr />
            </div>

        </>

    )

}

export default SlotMachine;