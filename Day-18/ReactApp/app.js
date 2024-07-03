import ReactDOM from "react-dom/client"
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent)

// const App = <div>Rohit Kumar</div>
const App = ()=>{
    return <div>Rohit Kumar</div>
}

root.render(<App/>);
