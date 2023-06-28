import EnterForm from "./pages/enter";
import RegistrationForm from "./pages/registration";
import Main from "./pages/main";
import {Route, Routes} from "react-router-dom"

const Body = () => {
    return (<div className="body">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/enter" element={<EnterForm/>}/>
            <Route path="/registration" element={<RegistrationForm/>}/>
        </Routes>
    </div>)
}
export default Body;
