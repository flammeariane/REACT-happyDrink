import React, { Component } from 'react'

class Establishment extends Component {
    constructor() {
        super()
        this.state = {
            like: 0,
            disLike: 0,
            favori: false
        }
    }

    incrementation() {
        this.setState({
            like: this.state.like + 1,
        })
    }

    decrementation() {
        this.setState({
            disLike: this.state.disLike + 1
        })
    }

    favori = () => {
        this.setState({
            favori: !this.state.favori
        })
    }


    render() {

        let upIcon = <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        let downIcon = <i className="fa fa-thumbs-down" aria-hidden="true"></i>
        let starIcon = <i className="fa fa-star-o" aria-hidden="true"></i>
        if (this.state.favori) {
            starIcon = <i className="fa fa-star favoriIcon" aria-hidden="true"></i>
        }


        return (
            <div className='establishment' >
                <div className='establishment-favori' >
                    <button onClick={this.favori}>{starIcon}</button>
                </div>
                <div className='establishment-description' >
                    <h3>{this.props.establishment.name}</h3>
                    {this.props.establishment.description}
                </div>
                <div className='establishmentLikeDislike' >
                    <p> {this.state.like}</p><button onClick={() => this.incrementation()}> {upIcon} </button>
                    <p> {this.state.disLike}</p><button onClick={() => this.decrementation()}>{downIcon}</button>
                </div>
            </div>

        );

    }
}

export default Establishment;