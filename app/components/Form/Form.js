/**
 * Created by Mike on 11/29/17.
 */

import React from 'react';
import {LONG} from './FormContainer';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            receivedUrl: 'Please submit the url that needs to be transformed!'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const type = this.props.transFormType;
        const url = this.state.url;
        const api = 'http://localhost:8080/' + (type == LONG ? 'longToShort' : 'shortToLong');

        console.log(type + ' ' + url + " " + api);
        fetch(api, {
            method: 'post',
            body: JSON.stringify(url)
        }).then(results => {
            //console.log(results);
            return results.json();
        }).then(data => {
            //console.log(data['url']);
            this.setState({receivedUrl: data['url']});
        }).catch((e) => {
            alert("error: " + e);
        });

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({url: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.props.transFormType}:
                    <input type="text" value={this.state.url} onChange={this.handleChange} />

                </label>
                <input type="submit" value="transform" />
                <a href={this.state.receivedUrl}>{this.state.receivedUrl}</a>

            </form>
        );
    }
}

export default Form;