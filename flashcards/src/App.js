import MainNavbar from "./components/MainNavbar/MainNavbar";

import './styles/main.scss';
import Decks from "./components/Decks/Decks";

function App() {
    return (
        <div>
            <MainNavbar/>
            <Decks />
        </div>
    );
}

export default App;
