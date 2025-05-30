import { useState, useEffect } from "react";

const Contact = () => {

    const [count, setCount] = useState(0);
    // useEffect(()=> {
    //     console.log("useEffect called");
    // })
    return (
        <div className="contact">
            <h2 onClick={()=>{
                setCount(count+1);
            }}>Count: {count}</h2>
            <h2>This is the contact page</h2>
        </div>
    )
}


export default Contact;