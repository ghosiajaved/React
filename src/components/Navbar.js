import React from 'react'
import PropTypes from 'prop-types'
import Btn from './Btn'


export default function Navbar(props) {

    return (
        <div className="Navbar">
            {/* Here navbar is a component which can be reused on other pages or websites with little to no modification
            as per users requirement  */}
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{props.features}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{props.about}</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {props.branches}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>

            <Btn />

        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    features: PropTypes.string,
    about: PropTypes.string,
    branches: PropTypes.string
}

Navbar.defaultProps = {
    title: "set title here",
    features: "set features here",
    about: "mention about here",
    branches: "mention branches here"
}

/* All React components must act like pure functions with respect to their props.
Pure Function
They do not attempt to change their inputs
function sum(a, b) {
    return a + b;
  }

Impure Function
They change their own input
function withdraw(account, amount) {
    account.total -= amount;
  }
 */