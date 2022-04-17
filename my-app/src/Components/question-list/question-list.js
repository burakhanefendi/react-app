import React, { Component } from 'react';
import { Row,Container } from 'reactstrap';
import axios from 'axios';

import { API_URL } from '../../constants';
import Question from "../question/question";
import HeaderTitle from "../headertitle/headertitle";
import CreateQuestion from "../create-question/create-question";

import './question-list.css';


class QuestionList extends Component {
    state = {
      list: [],
    };

    componentDidMount() {
      axios.get(`${API_URL}questions`)
      .then(response => {
        this.setState({
          list: response.data,
        })
      })
      .catch(error => {
        console.info(error);
      });

    }

    render() {
        return (
            <div>
                <HeaderTitle title="Questions" />
                <CreateQuestion />
                <section className="App-intro">
                <Container>
                    <Row>
                        {
                          this.state.list.map(data =>
                            <Question questionData={data} key={data.url}/>)
                        }
                    </Row>
                </Container>
                </section>
            </div>

        );
    }
}

export default QuestionList;
