import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { dateTimeFormatter } from '../utils';

import './question.css';

class Question extends Component {

    render() {
        return (
          <Col className="question" xs="6" sm="3">
          <Link to={this.props.questionData.url}>
              <h4><strong>{this.props.questionData.question}</strong></h4>
              <p><strong>published at</strong>: { dateTimeFormatter(this.props.questionData.published_at) }</p>
              <p><strong>#choises</strong>: {this.props.questionData.choices.length}</p>
          </Link>
        </Col>
        );
    }
}

export default Question;
