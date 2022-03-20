import React from 'react';


const Todolist = (props) => {

    const total=()=>{

        
       props.setTotal(props.Total-1);
       //console.log("function called success");
    }
   

    return (
        <>
             <div className="todo_style">
                <div className="gol"  onClick={()=>{
                    props.onSelect(props.id);
                    total();
                } }><span>*</span></div>
                <li>{props.text}</li>
             </div>
             
        </>
    );
}

export default Todolist;
