//import {Fragment} from "react";
//import Header from "./components/Header";
import "./styles/App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./components/Home";
import Header from "./components/Header";
import {Fragment} from "react";
import {Product} from "./components/Product";
import Counter from "./components/Counter";
import Contact from "./components/Contact";


//we can import Header.css file here too because we are using that component
//const no=1;

// const Header=()=>{
//     return <h1>hello ji</h1>
// };
function App(){

    return(
        <Fragment>

        <Router>
            <Header/>
            <Routes>
                <Route path={"/product/:id"} element={<Product/>}/>
                <Route path="*" element={<Counter/>}/>
                <Route path="/about" element={<Home/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
       </Router>
        </Fragment>
//     <Fragment>
//     <div>
//         <Header/>
//         {/*<h1>welcome page {no}</h1>*/}
//     </div>
// </Fragment>
    )
}

export default App;