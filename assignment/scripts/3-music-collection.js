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


// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. 
// Check that for artists with multiple matches, all are found.
console.log(findByArtist("dudezaplenti"))
console.log(findByArtist("Wham!"))
console.log(findByArtist("Bryan Adams"))

// Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. 
//   Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the 
//     search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, 
//     then return all albums in the `collection`.
function search(obj) { 
    let newArr = [];
    if(obj === undefined || Object.entries(obj).length === 0) {
        return collection}
        else {
    for (let i = 0; i < collection.length; i++){
        if (collection[i].artist === obj.artist && collection[i].yearPublished === obj.year){
            newArr.push(collection[i].title)
        }
    } return newArr
  }
}
//testing
console.log(search({artist: "David", year: 1997}))
console.log(search())
console.log(search({}))
console.log(search({artist: "Wham!", year:1984}))

//success

// - Add an array of `tracks` to your album objects. 
// Each track should have a `name` and `duration`. 
// You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter 
//   for the array of tracks.
let newCollection = []

function nAddToCollection(title, artist, yearPublished, tracks){
    let newObj ={
        "title": title,
        "artist": artist,
        "yearPublished": yearPublished,
        "tracks": tracks
    }
    newCollection.push(newObj)
    return newObj;
}
//test
let arr = [	"Wake Me Up Before You Go-Go : 3:50", "Everything She Wants : 5:01", "Heartbeat : 4:42"]
let arr2 = ["If You Were There : 3:43", "I'm Your Man 4:06", "Everything She Wants : 5:01"]
let arr3 =["Material Girl : 4:01", "Angel : 3:56", "Like a Virgin : 3:38"]

console.log("Make It Big", nAddToCollection("Make it Big", "Wham!", 1984, arr))
console.log("If you were there", nAddToCollection("The Best of Wham!: If You Were There...","Wham!", 1997, arr2 ))
console.log("like a Virgin", nAddToCollection("Like a Virgin", "Madonna", 1984, arr3))

//testing
console.log(newCollection[0].tracks[1])

//   - Update `search` to allow a `trackName` search criteria
function nSearch(obj) { 
    let newArr = [];
    if(obj === undefined || Object.entries(obj).length === 0) {
        return newCollection}
        else {
    for (let i = 0; i < newCollection.length; i++){
        if (newCollection[i].artist === obj.artist && newCollection[i].yearPublished === obj.year){
            for (let j = 0; j<newCollection[i].tracks.length;j++){
                if(newCollection[i].tracks[j]===obj.track){
                    newArr.push(newCollection[i].title)
                }
            }  
        }
    } return newArr
  }
}

//test
console.log(nSearch({artist: "David", year: 1997, track: "Caprice 17 : 2:35",}))
console.log(nSearch())
console.log(nSearch({}))
console.log("This should work", nSearch({artist: "Wham!", year: 1984, track: "Heartbeat : 4:42",}))

//   - Update the `showCollection` function to display the list of tracks 
//   for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```
function nShowCollection (arr) {
    console.log(arr.length);
    for (let i =0; i<arr.length; i++) {
        console.log(`${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}\n1. ${arr[i].tracks[0]}\n2. ${arr[i].tracks[1]}\n3. ${arr[i].tracks[2]}.`)

    }
}
//test
nShowCollection(newCollection)
// > Make sure to test all your code!

