function sortHashMapByValue(map) {
    return Object.fromEntries(
        Object.entries(map).sort((a, b) => a[1].localeCompare(b[1]))
    );
}

let map = {
    101: "John Doe",
    102: "Jane Smith",
    103: "Peter Johnson"
};

console.log(sortHashMapByValue(map));
