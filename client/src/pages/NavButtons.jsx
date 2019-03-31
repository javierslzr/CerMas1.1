import React, { Component } from 'react';
import AddModal from "../pages/addModal"
import ButtonCheckbox from "../components/buttonCheckbox"
class NavButtons extends Component {
    state = {}
    render() {
        return (
            <>
                <AddModal />
                <ButtonCheckbox />
            </>
        );
    }
}

export default NavButtons;