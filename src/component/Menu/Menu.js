import React from "react";


const Menu = (props) => {
    return (
        <div style={ props.style }>
            { props.children }
        </div>
    )
}

export default Menu;