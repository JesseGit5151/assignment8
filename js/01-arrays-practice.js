//STEP 1
// let movies = ['Die Hard', 'Mission Impossible', 'John Wick', 'Tarzan', 'Space Odyssey']
// console.log(movies[1])
//STEP 2
// let movies = new Array(5)
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// console.log(movies[0])
//STEP 3
// let movies = new Array(5)
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[2] = 'Kong'
// console.log(movies.length)
//STEP 4
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// delete movies[0]
// console.log(movies)
//STEP 5
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'
// for (movie in movies) {
//     console.log(movies[movie])
// }
//STEP 6
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'
// for (const movie of movies) {
//     console.log(movie)
// }
//STEP 7
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'
// movies.sort()
// for (const movie of movies) {
//     console.log(movie)
// }
//STEP 8
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'

// let leastFavMovies = []
// leastFavMovies[0] = 'chickflic1'
// leastFavMovies[1] = 'chickflic2'
// leastFavMovies[2] = 'chickflic3'
// console.log('Movies I like:')
// console.log('')
// for (movie in movies) {
//     console.log(movies[movie])
// }
// console.log('')
// console.log('Movies I dilike:')
// console.log('')
// for (movieDislike in leastFavMovies) {
//     console.log(leastFavMovies[movieDislike])
// }
//STEP 9
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'

// let leastFavMovies = []
// leastFavMovies[0] = 'chickflic1'
// leastFavMovies[1] = 'chickflic2'
// leastFavMovies[2] = 'chickflic3'

// let mixedArray = movies.concat(leastFavMovies).reverse()
// for (movie in mixedArray) {
//     console.log(mixedArray[movie])
// }
//STEP 10
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'

// let leastFavMovies = []
// leastFavMovies[0] = 'chickflic1'
// leastFavMovies[1] = 'chickflic2'
// leastFavMovies[2] = 'chickflic3'

// let mixedArray = movies.concat(leastFavMovies).reverse()
// let lastItem = mixedArray.pop()
// console.log(lastItem)
//STEP 11
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'

// let leastFavMovies = []
// leastFavMovies[0] = 'chickflic1'
// leastFavMovies[1] = 'chickflic2'
// leastFavMovies[2] = 'chickflic3'

// let mixedArray = movies.concat(leastFavMovies).reverse()
// let lastItem = mixedArray.shift()
// console.log(lastItem)
//STEP 12
// let movies = []
// movies[0] = 'Die Hard'
// movies[1] = 'Mission Impossible'
// movies[2] = 'John Wick'
// movies[3] = 'Tarzan'
// movies[4] = 'Space Odyssey'
// movies[5] = '2012'
// movies[6] = 'Gladiator'

// let leastFavMovies = []
// leastFavMovies[0] = 'chickflic1'
// leastFavMovies[1] = 'chickflic2'
// leastFavMovies[2] = 'chickflic3'

// let mixedArray = movies.concat(leastFavMovies).reverse()
// mixedArray.indexOf('chickflic1')
// mixedArray.indexOf('chickflic2')
// mixedArray.indexOf('chickflic3')
// mixedArray[2] = 'Lord Of The Rings'
// mixedArray[1] = 'The Matrix'
// mixedArray[0] = 'Wild Wild West'
// console.log(mixedArray)
//STEP 13
// let movies = [["Die Hard", 1], ["Mission Impossible", 2], ["John Wick", 3], ["Space Odyssey", 4], ["Gladiator", 5]]

// let movieStrings = movies.filter((item) => {
//     return typeof item[0] === 'string'
// });
// console.log(movieStrings)
//STEP 14
// let employees = []
// employees[0] = 'Ted'
// employees[1] = 'Sam'
// employees[2] = 'Fred'
// employees[3] = 'Mark'

// function showEmployee (arr) {
//     console.log('Employees:')
//     console.log('')
//     for(item in arr) {
//         console.log(arr[item])
//     }
// }
// showEmployee(employees)
//STEP 15
// let someArr = [58, '', 'abcd', true, null, false, 0]
// let filteredValues = someArr.filter(item => item)
// console.log(filteredValues)
//STEP 16
// let randArr = [1,2,3,4,5,6,7]

// function getRandomNum(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length)
//     const item = arr[randomIndex]
//     return item
// }
// console.log(getRandomNum(randArr))
//STEP 17
let randArr = [1,22,300,40,5,6,7,88]
//Compares every number next to each other and keeps the larger of the two until there are no numbers left
var max = randArr.reduce(function(a, b) {
    return Math.max(a, b)
});
console.log(max)