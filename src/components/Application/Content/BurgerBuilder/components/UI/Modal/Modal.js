import React, { Component, Fragment } from 'react';

import classes from './Modal.module.scss';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    //Prevent modal from updating if the "SHOW" props didn't changed or the children
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        let modalClass = [classes.Modal];
        if (this.props.show) modalClass.push(classes.Show);
        return (
            <Fragment>
                <Backdrop show={this.props.show} click={this.props.click} />
                <div className={modalClass.join(' ')}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;   