console.log("Start")

function loginUser(email, password, userFunction){
    setTimeout(() => {
        console.log("Now we have the data")
        userFunction({userEmail: email})
    }, 2500);
}

function getUserVideos(email, callback){
    setTimeout(() => {
    callback(["vid1", "vid2", "vid3", "vid4"]);
    }, 2000);
}

 

function userFunction(user){
    console.log(user)
    getUserVideos(user.userEmail, videoFunction)
}

function videoFunction(videos){
    console.log(videos)
}
const user1 = loginUser("idgr@gmail.com", 12345, userFunction)


console.log('End')