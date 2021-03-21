import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnimal } from "../actions";

export const AnimalList = () => {
    const animals = useSelector((state) => state.animals);
    const dispatch = useDispatch();

    const renderList = () => {
        return animals.map((animal) => {
            return (
                <div className="item" key={animal.kind}>
                    <button
                        className="ui button primary"
                        onClick={() => dispatch(selectAnimal(animal))}
                    >
                        Show {animal.kind}
                    </button>
                </div>
            );
        });
    };

    return <div className="ui divided list">{renderList()}</div>;
};

export default AnimalList;
