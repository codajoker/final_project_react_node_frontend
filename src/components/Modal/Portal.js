import { Component } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

class Portal extends Component {
    componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    }
    
    render() {
        return createPortal(
            <>
                {this.props.children}
            </>, modalRoot
        );
    }
}

export default Portal;