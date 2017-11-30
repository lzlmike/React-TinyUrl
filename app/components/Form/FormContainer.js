/**
 * Created by Mike on 11/29/17.
 */
import React from 'react';
import Form from './Form.js';

const LONG = "Long To Short";
const SHORT = "Short To Long";

export default class FormContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Form transFormType={LONG} />
                <Form transFormType={SHORT} />
            </div>
        );
    }
}

export {LONG};