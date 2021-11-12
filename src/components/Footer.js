import { Link } from 'react-router-dom';
import AddButton from './AddButton.js'
function Footer({state}) {

    const setWillAddTask = state[1];

    const addTask = () => {
        setWillAddTask(true);
    }
    return (
        <div style={footerStyle}>
            <Link to='todos'><AddButton onClick={addTask}/></Link>
        </div>
    )
}

const footerStyle = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    transform: 'translateY(3vh)',
    width:"100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
}

export default Footer
