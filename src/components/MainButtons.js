import { Link } from "react-router-dom";
import Button from './Button.js';

const button = {
    width: '100%',
    height: '100px',
    color: '#fff',
    fontSize: '1.5rem',
    fontFamily: 'Permanent Marker, cursive'
}
const mainButtonsStyle = {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '85%',
    padding: '5rem .5rem',
}

function MainButtons() {
    return (
        <div style={mainButtonsStyle}>
            <Link to="todos"><Button text="To Do" style={button} /></Link>
            <Link to="archived"><Button text="Archived" style={button} /></Link>
            <Link to="about"><Button text="About Us" style={button} /></Link>
        </div>
    )
}

export default MainButtons
