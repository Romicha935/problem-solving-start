let isLoggedIn = true;
let isEmailVerified = true;

if(isLoggedIn && isEmailVerified){
    console.log("Profile Update sucessfully")
} else{
    console.log("Please login and verify your email")
}


let isLoggedIn = true;
let isEmailVerified = true;
let role = "Manager";

if(isLoggedIn && isEmailVerified && (role == "Manager" || role == "Admin")){
    console.log("Welcome to Admin Dashboard")
} else {
    console.log("You are not authorized to access this page")
}

let isLoggedIn = true;
let isPinCorrect = true;
let balance = 500;
let isVIP = true;

if(isLoggedIn && isPinCorrect && balance >= 1000 || isVIP){
 console.log("Cash Withdraw Successfully")   
} else{
    console.log("Transaction Failed")
}

let isLoggedIn = true;
let isSubscriptionActive = true;
let age = 16;
let hasParentPermission = true;

if(isLoggedIn && isSubscriptionActive && (age >= 18 || hasParentPermission)){
    console.log("Enjoy your movie 🍿")
} else{
    console.log("You are not allowed to watch this movie")
}