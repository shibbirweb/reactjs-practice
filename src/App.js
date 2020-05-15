import React, {Fragment} from "react";
import Tasks from "./components/Pages/Tasks";
import Navbar from "./components/Navbar";


class App extends React.Component {

    render() {
        return (
            <Fragment>
                <Navbar/>
                <Tasks/>
            </Fragment>
        );
    }
}

export default App;
