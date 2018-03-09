import * as React from 'react';
import Person from '../../ts/person';
import { TextboxAndError } from '../../../src/ui/templates/textboxAndError';
import { SimpleTextbox } from '../../../src/ui/templates/simpleTextbox';
import { BoundCheckbox} from './boundCheckbox';

export default class MainPage extends React.Component<{}, MainState> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.setState({ model: new Person('', '', 20, true)});
    }

    render() {
        if(this.state == null) {
            return null;
        }
        return (
            <main className="app__main">
                <h1>DEMO FUN</h1>
                <fieldset className="dc">
                    <legend className="dc__legend">Edit a person</legend>
                        <TextboxAndError id="name" className="dc__text"
                            datacontext={this.state.model} targetProperty="name" />
                        <label className="dc__label" htmlFor="name">Name</label>
                        <br />
                        <TextboxAndError id="jobTitle" className="dc__text"
                            datacontext={this.state.model} targetProperty="jobTitle" />
                        <label className="dc__label" htmlFor="jobTitle">Job-title</label>                        
                        <br />
                        <TextboxAndError id="age" className="dc__text"
                            datacontext={this.state.model} targetProperty="age" />
                        <label className="dc__label" htmlFor="age">Age</label>                        
                        <br />
                        <BoundCheckbox id="isInsane" className="dc__checkbox"
                            datacontext={this.state.model} targetProperty="isInsane" />
                </fieldset>
            </main>
        )
    }
}

interface MainState {
    model: Person
}