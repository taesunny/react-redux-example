export const selectAnimal = (animal) => {
    return {
        type: "ANIMAL_SELECTED",
        payload: animal,
    };
};
