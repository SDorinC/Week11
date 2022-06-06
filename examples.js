let promise1 = new Promise((resolve, reject) => {
    let sum = 2 + 28;
    if (sum > 20) {
        resolve(sum);
    } else {
        reject(sum);
    }
});

promise1.then(result => console.log(result + " > 20")).catch(error => console.log(error + " < 20"));

async function receiveNumber() {
    try {
        let response = await promise1;
        console.log(response + " > 20");
    } catch (error) {
        console.log(error + " < 20")
    }
}

receiveNumber();

// /************************************************************************************************************************

function liftWeight(weight) {
    return new Promise((resolve, reject) => {
        if (weight <= 40) {
            resolve("Good job lifting that weight");
        } else {
            reject("That weight is too heavy for you to lift");
        }
    })
}

liftWeight(35).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

async function liftWeight2(weight) {
    try {
        let response = await liftWeight(weight);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

liftWeight2(75);

// /************************************************************************************************************************

function awaitResponse(waitTime) {
    return new Promise((resolve, reject) => {
        if (waitTime <= 5000) {
            setTimeout(function () {
                resolve("Waiting is over");
            }, waitTime)
        } else {
            setTimeout(function () {
                reject("We are waiting too much. Something is wrong");
            }, waitTime)
        }
    })
}

awaitResponse(3000).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

async function awaitResponse2(waitTime) {
    try {
        let response = await awaitResponse(waitTime);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

awaitResponse2(6000);