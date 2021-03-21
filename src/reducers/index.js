import { combineReducers } from "redux";

const animalsReducer = () => {
    return [
        { kind: "Cat", img: "/images/cat.jpeg" },
        { kind: "Dog", img: "/images/dog.jpeg" },
        { kind: "Fox", img: "/images/fox.jpeg" },
        { kind: "Lion", img: "/images/lion.jpeg" },
    ];
};

const selectedAnimalReducer = (selectedAnimal = null, action) => {
    if (action.type === "ANIMAL_SELECTED") {
        return action.payload;
    }

    return selectedAnimal;
};

export default combineReducers({
    animals: animalsReducer,
    selectedAnimal: selectedAnimalReducer,
});
