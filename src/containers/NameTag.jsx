import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
    state = { onNameSubmit: '', onGreetingSubmit: '' };

    handleNameChange = (event) => {
        this.setState({ onNameSubmit: event.target.value });
    };

    handleGreetingChange = (event) => {
        this.setState({ onGreetingSubmit: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ onNameSubmit: this.state.onNameSubmit, onGreetingSubmit: this.state.onGreetingSubmit })
    }

    render() {
        const { onGreetingSubmit, onNameSubmit } = this.state;
        return (
            <>
            <Controls 
                onNameChange={this.handleNameChange} 
                onGreetingChange={this.handleGreetingChange}
                onSubmit={this.handleSubmit}/>
            <Display 
                onGreetingSubmit={onGreetingSubmit}
                onNameSubmit={onNameSubmit}/>
            </>
        )
    }
}
