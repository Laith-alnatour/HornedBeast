import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "./SelectedBeast";

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          likes: 0,
          disLikes: 0,
          show: false,
        }
      }
      
        handleLike = () => {
          this.setState({likes: this.state.likes + 1})
        }
        handleDisLike = () =>{
        this.setState({disLikes: this.state.disLikes + 1})
        }
        handleClose = () => this.setState({show: false});
        handleShow = () => this.setState({show: true});
            
    render() {
        return (
          <div className="cards">
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src={this.props.image_url} onClick={this.handleShow} />
                <Modal show={this.state.show} handleShow={this.handleShow} handleClose={this.handleClose} title={this.props.title} description={this.props.description} image_url={this.props.image_url} likes={this.state.likes} disLikes={this.state.disLikes} />
              <Card.Body >
                <Card.Title onClick={this.handleShow}>{this.props.title}</Card.Title>
                <Card.Text onClick={this.handleShow}>
                  {this.props.description }
                </Card.Text>
                <Button variant="primary" onClick={this.handleLike}>❤ {this.state.likes}</Button>
                <Button variant="primary" onClick={this.handleDisLike}>👎{this.state.disLikes}</Button>
              </Card.Body>
            </Card>
            </div>
            )
     }
}

export default Cards;