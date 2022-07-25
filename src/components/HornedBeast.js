import React from "react";

class HornedBeast extends React.Component {

    render() {
        return (
            <div title="containerDiv">
                <div className="beastTitle">
                    <h2>{this.props.title}</h2>
                </div>

                <div>
                    <img src={this.props.image_url} className='hornedBeast' alt={this.props.title} />
                </div>

                <div className="hornedBeastParagraph">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default HornedBeast; 