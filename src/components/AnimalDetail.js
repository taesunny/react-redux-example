import React from "react";
import { useSelector } from "react-redux";

const AnimalDetail = () => {
    const animal = useSelector((state) => state.selectedAnimal);

    if (!animal) {
        return <div>Select a Animal</div>;
    }

    return (
        <div>
            <h3>{`Animal Kind: ${animal.kind}`}</h3>
            <p>
                <img alt={animal.kind} src={animal.img} width="200px" />
            </p>
        </div>
    );
};

export default AnimalDetail;
