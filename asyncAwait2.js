console.log("Start")

// const youTube = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("Fetching video from YouTube")
//         resolve({video: ['vid1', 'vid2', 'vid3', 'vid4']})
//     }, 2000);
// })
// const facebook = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("Fetching user from Facebook")
//         resolve({user: 'Name'})
//     }, 4000);
// })

// Promise.all([youTube, facebook])
// .then(result => console.log(result))

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

async function displayUser(){
    try{
        const user1 = await loginUser("idgreat@y.com", 1234)
        const videos = await getUserVideos(loginUser.userEmail)
        const detail = await videoDetails(videos[0])
        console.log(user1.email)
        console.log(videos)
        console.log(detail)
    }
    catch(err){
        console.log('We could not get the videos')
    }
}

displayUser()