// Return a random message from the answers list.

function choice(arr) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

export { choice };