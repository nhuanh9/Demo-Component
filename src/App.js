import logo from './logo.svg';
import './App.css';
import Demo from "./Demo";
import Life from "./Life";
import {useState} from "react";
import FComponent from "./FComponent";

function App() {
    let [isShow, setIsShow] = useState(true);
    let [pr, setPr] = useState(0);
    return (
        <>
            <button onClick={()=> {
                setIsShow(!isShow);
            }}>Show</button>
            <button onClick={()=> {
                setPr(pr++);
            }}>Change</button>

            {isShow &&  <FComponent></FComponent>}

        </>
    );
}

export default App;
