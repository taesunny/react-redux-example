import React from "react";
import { connect } from "react-redux";

const AnimalDetail = ({ animal }) => {
    if (!animal) {
        return <div>Select a Animal</div>;
    }

    return (
        <div>
            <h3>{`Animal Kind: ${animal.kind}`}</h3>
            <p>
                <img alt={animal.kind} src={animal.img} width='200px'/>
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { animal: state.selectedAnimal };
};

export default connect(mapStateToProps)(AnimalDetail);
