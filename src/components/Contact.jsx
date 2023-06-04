import React, {useEffect, useState} from "react";

const Contact=()=>{
  //let name="";console.log(name);
  let [name,setName]=useState("initial");

  // const clicked=()=>{
  //     setName(name);
  // }
    useEffect(()=>{
        console.log("called again");
        return ()=>{
          console.log("unmounting");
        }
    },[])
    return (

        <div>
            <form>
                <input type="text" placeholder={"Name"} onChange={(e)=>(setName(e.target.value))} value={name}/>
                <input type={"email"} placeholder={"Email"}/>

            </form>
            {/*setName(name);*/}
            <p>{name}</p>
            <button onClick={()=>console.log(name)}>Press</button>

        </div>




    );



}

export default Contact;