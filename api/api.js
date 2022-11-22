const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll(){
    const result = await fetch(url)
        .then((result) => result.json())
        .catch((e) => e);
    return result;
}

/* async function getAll() {
    const result = await fetch(url);
    const jsonData = await result.json()
    return jsonData;
} */