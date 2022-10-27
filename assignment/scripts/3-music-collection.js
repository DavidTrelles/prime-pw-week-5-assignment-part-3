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

