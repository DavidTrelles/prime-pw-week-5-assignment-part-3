console.log('***** Music Collection *****')

// Create a variable `collection` that starts as an empty array.
let collection = []
// - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection(title, artist, yearPublished){
    let newObj ={
        "title": title,
        "artist": artist,
        "yearPublished": yearPublished,
    }
    collection.push(newObj)
    return newObj;
}
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
console.log("Make It Big", addToCollection("Make it Big", "Wham!", 1984))
console.log("If you were there", addToCollection("The Best of Wham!: If You Were There...","Wham!", 1997 ))
console.log("like a Virgin", addToCollection("Like a Virgin", "Madonna", 1984))
console.log("Reckless", addToCollection("Reckless", "Bryan Adams", 1984))
console.log("Faith", addToCollection("Faith", "George Michael", 1987))
console.log("Whitney", addToCollection("Whitney", "Whitney Houston", 1987))
console.log(`This is the record collection`, collection)

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection (arr) {
    console.log(arr.length);
    for (let i =0; i<arr.length; i++) {
        console.log(`${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}.`)

    }
}
// - Test the `showCollection` function.
showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist (str) {
    let results = [];
    for (let i=0; i<collection.length;i++){
        if (str === collection[i].artist){
            results.push(collection[i]);
        }
    } return results
}

console.log(findByArtist("Wham!"))

