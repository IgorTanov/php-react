import"./header.css";
import { Link } from "react-router-dom"



const Header = () =>{
    return (<div className="header" >
        <Link to="/">
            <div className="header-logo" >Logo</div>
        </Link>
        <div className="header-setings-pannel" >
            <input type="search" placeholder="search" />
            <select defaultValue={"rub"} >
                <option  value={"rub"} >rub</option>
                <option  value={"euro"} >euro</option>
                <option value={"usd"} >usd</option>
            </select>
        </div>
        <div className="header-authorization-pannel">
            <Link to="/enter">
                <div className="header-button">
                    enter
                </div>
            </Link>
            <Link to="/registration">
                <div className="header-button">
                    registration
                </div>
            </Link>
        </div>
    </div>)
} 
export default Header;
