import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAnimal } from "../actions";

class AnimalList extends Component {
    renderList() {
        return this.props.animals.map((animal) => {
            return (
                <div className="item" key={animal.kind}>
                    <button
                        className="ui button primary"
                        onClick={() => this.props.selectAnimal(animal)}
                    >
                        Show {animal.kind}
                    </button>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { animals: state.animals };
};

export default connect(mapStateToProps, { selectAnimal })(AnimalList);
