const fetchPhotos = () => {
    fetch("http://localhost:3000/photos")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Something went wrong");
    })
    .then((newPhotos) => {
        console.log(newPhotos)
    })
    .catch((error) => {
        console.log(error)
    })
};
export { fetchPhotos };