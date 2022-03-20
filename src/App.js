import React,{useState} from 'react';
import {} from './App.css';
import Todolist from './Todolist';

const App = () => {

   const [inputList, setinputList] = useState("");
   const [Items, setItems] = useState([]);
   const [Total, setTotal] = useState(0);

   const itemEvent= (e)=>{
    setinputList(e.target.value);
};

   const listOfItems = ()=>{
        setItems((old)=>{
            return [...old,inputList];
        });
        setinputList("");
        setTotal(Total+1);
   };

   const deleteItem = (id)=>{

    console.log("deleted");

    setItems((old)=>{
        return old.filter((arrele,index)=>{
                 return index !== id ;
        })
    })

};

    return (
        <>
            <div className="main_div">
               <div className="center_div">
                   <br/>
                   <h1> ToDo List</h1>
                   <br/>
                   <div className="total">Total : {Total}</div>
                   <input type="text" placeholder="Add a Item" onChange={itemEvent}  value={inputList}  />
                   <button onClick={listOfItems}>+</button>
                   <ol>
                      {/*} <li>{inputList}</li> */}
             {
                      Items.map((item,index) =>{
                    return  <Todolist 
                    
                    key={index}
                    id={index}
                    text={item}
                    onSelect ={deleteItem}
                    Total={Total}
                    setTotal={setTotal}

                    />;
                      })

             }         

                   </ol>
                </div> 
            </div>  
        </>
    )
}

export default App;
