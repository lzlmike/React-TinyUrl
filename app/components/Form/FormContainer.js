/**
 * Created by Mike on 11/29/17.
 */
import React from 'react';
import Form from './Form.js';
//import { Grid, Row, Col } from 'react-bootstrap';

const LONG = "Long To Short";
const SHORT = "Short To Long";

const center = {
    margin: "auto",
    width: "50%",
    border: "3px solid green",
    padding: "10px"
};

export default class FormContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={center} >
                <Form transFormType={LONG} />
                <Form transFormType={SHORT} />
            </div>
        );
    }
}

export {LONG};