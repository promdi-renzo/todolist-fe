import AddButton from './AddButton.js'

function Footer() {
    return (
        <div style={footerStyle}>
            <AddButton />
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
