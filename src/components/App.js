import React from "react";
import AnimalList from "./AnimalList";
import AnimalDetail from "./AnimalDetail";

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <h1>Please select a animal!</h1>
            </div>
            <div className="ui row">
                <div className="column two wide">
                    <AnimalList />
                </div>
                <div className="column three wide">
                    <AnimalDetail />
                </div>
            </div>
        </div>
    );
};

export default App;
