import {Link} from "react-router-dom";        
import { useEffect, useState } from "react";
import "./main.css"


const Main = () =>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost/123.php/").then(response=>response.json()).then(response=>setData(response))
    },[]);

    
    // if(!data){console.log("somthing wrong")};
    const items = data.map((elem:any)=>{
        let gameName = elem["name"]
        const offers = elem["offers"].map((elem:any) => {
            console.log(gameName)
            return(
                 <div key={elem["offer id"]} className="main-offer-name">
                    <Link to={"/game?name="+gameName+"&offer_id="+elem["offer id"]}>
                        {elem["offer name"]}    
                    </Link>
                    </div>
            )
        })
        return(
            <Link to={"/game?name="+elem.name}>
            <div className="main-game-div" key={elem.id}>
                <div className="main-game-name">{elem.name}</div>
                <div className="main-offers-names">{offers}</div>
            </div>
            </Link>
        )
    })
    


    return (<div className="main">{items}</div>)
}
export  default Main;
