import React, { Component } from 'react';
import {
    Collapse,
    Button,
    CardBody,
    Card
} from 'reactstrap';
import QuestionForm from "../question-form/question-form";
import './create-question.css';

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <Button className="add-question-btn" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Add Question</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <QuestionForm />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default CreateQuestion;