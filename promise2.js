console.log("Start")

function loginUser(email, password){
    return new Promise(myPromise)
}

function getUserVideos(email){
    return new Promise(myPromise2)
}

function videoDetails(videos){
    return new Promise(myPromise3)
}

function myPromise(resolve, reject){
    setTimeout((email) => {
        console.log("Now we have the data")
        resolve({userEmail: email})
        // reject(new Error("There is Error in user login"))
    }, 2000);
}

function myPromise2(resolve, reject){
    setTimeout(() => {
        resolve(["video1", "video2", "video3", "video4"])
        // reject(new Error("There is error in getting user video"))
    }, 2000);
}

function myPromise3(resolve, reject){
    setTimeout(() => {
        resolve("Details of the video")
        // reject(new Error("There is error in getting video details"))
    }, 2000);
}

loginUser("idgreat@g.com", 1234567)

// .then(user => console.log(user))
.then(user => getUserVideos(user.email))

.then(videos => videoDetails(videos[0]))

.then(details => console.log(details))

console.log("End")









// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("got the user")
//         // resolve({user: "emmanuel"})
//         reject(new Error("this is an error, user not logged in"))
//     }, 2000);
// })

// .then(user => {
//     console.log(user)
// })
// .catch(err => console.log(err.message))