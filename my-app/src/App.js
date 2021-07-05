import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";


import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";


const App = () => {
    const [activeTasks, setActiveTask] = useState(0);
    const [finishedTasks, setFinishedTask] = useState(0);

    return (
        <Router>
            <Header />
            <Main
                setActiveTask={setActiveTask}
                setFinishedTask={setFinishedTask}
            />
            <Footer activeTasks={activeTasks} finishedTasks={finishedTasks} />
        </Router>
    );
};

export default App;






