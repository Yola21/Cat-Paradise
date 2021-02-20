import React, { Component } from 'react';
import './Body.css';
import Modal from 'react-bootstrap/esm/Modal';

class Body extends Component{
    state = {
        openModal: false,
        modalIndex: null,
    }
    
    hideModal = () => {
        this.setState({
            openModal: false,
        })
    }
    
    render(){
        return(
            <div className="body">
                {
                    this.props.data.map((cat, index) => {
                        return(
                            <div className="body_card" key={cat.id}>
                                <div className="body_cardImage">
                                    <img src={cat.image?.url} alt={cat.name} />
                                </div>
                                
                                <div className="body_cardInfo">
                                    <h3>{cat.name}</h3>
                                    <button onClick={() => {this.setState({ openModal: true, modalIndex: index })}} id={cat.id} >View Details</button>
                                </div>    
                            </div>
                        )
                    })
                }
                <Modal
                    {...this.props.data[this.state.modalIndex]}
                    show= {this.state.openModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="modal"
                    style = {this.styles}
                >
                    <Modal.Body>
                        <div className="modal_Briefinfo">
                            <img src={this.props.data[this.state.modalIndex]?.image?.url} alt={this.props.data[this.state.modalIndex]?.name} />
                            <div className="modal_Heading">
                                <h2>{this.props.data[this.state.modalIndex]?.name}</h2>
                                <h4>{this.props.data[this.state.modalIndex]?.origin}</h4>    
                            </div>
                        </div>
                        <div className="modal_Moreinfo">
                            <p>{this.props.data[this.state.modalIndex]?.description}</p>
                            <p><span>Lifespan:</span> {this.props.data[this.state.modalIndex]?.life_span} years</p>
                            <p><span>Temperament:</span> {this.props.data[this.state.modalIndex]?.temperament}</p>
                            <p><span>Weight:</span> {this.props.data[this.state.modalIndex]?.weight?.metric} Kgs </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={this.hideModal} className="modal_Button" >Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Body;