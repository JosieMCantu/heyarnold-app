export const findAllCartoons = async () => {
    const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
    const json = await res.json();
    return json.map(({_id, name, image}) => ({
        id: _id,
        name,
        image,
    }));
};