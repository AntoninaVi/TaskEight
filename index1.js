var know = {
    "hello": "Hi",
    "hi": "Good",
    "john": "hi john"
    // You Can Add More Stuff Here - It is customizable. - you can add more than 3 
};
function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML += user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML += "I am not a genius , ask me something that I know!<br>";
    }
}


function displayMessage(type) {
    var initialMessages = [
        "open google",
        "open chrome",
        "open youtube",
    ];
    // var responseMessages = ["FAIL"]

    var newDiv = document.createElement("div");
    newDiv.className = "chat-bubble";
    var newP = document.createElement("p");
    var newImg = document.createElement("img");
    newImg.className = "bot-image";
    newP.innerHTML = type == "initial" ? initialMessages[Math.floor(Math.random() * Math.floor(initialMessages.length))] : responseMessages[Math.floor(Math.random() * Math.floor(responseMessages.length))];
    newDiv.appendChild(newImg)
    newDiv.appendChild(newP);


    var messages = document.getElementById("chat-contents");
    messages.appendChild(newDiv);
    document.getElementById("loaderTyping").style.visibility = "hidden";
}

// function arrowSubmit() {
//     console.log("test")
//     button = document.getElementById("submit-chat");
//     text = document.getElementById("chat-message-value");


//     if (text.value != "") {
//         button.classList = "active";
//     } else {
//         button.classList.remove("active");

//     }
// }

function submitMessage() {
    var text = document.getElementById("chat-message-value").value;
    if (text == "") {
        return
    }
    document.getElementById("chat-message-value").value = "";

    var newDiv = document.createElement("div");
    newDiv.className = "chat-bubble--user";
    var newImg = document.createElement("img");
    newImg.className = "user-image";
    var newP = document.createElement("p");
    newP.innerHTML = text;
    newDiv.appendChild(newImg);
    newDiv.appendChild(newP);

    var messages = document.getElementById("chat-contents");
    messages.appendChild(newDiv);
    document.getElementById("submit-chat").classList.remove("active");
    document.getElementById("loaderTyping").style.visibility = "visible";
    setTimeout(function () { displayMessage("response") }, 5000);

}

function addHandlers() {
    document.getElementById("submit-chat").addEventListener("click", submitMessage);
    document.onkeypress = function (e) {
        if (e.keyCode == 13) {
            document.getElementById("submit-chat").click();
        }
    };
    document.getElementById("loaderTyping").style.visibility = "hidden";

    setTimeout(function () { displayMessage("initial") }, 5000);
    // document.getElementById("chat-message-value").addEventListener("input", arrowSubmit);
}

window.addEventListener("load", addHandlers);

// const data = new Date(2017, 3, 22, 5, 23, 50);
// document.getElementById("date1").innerHTML = data;

// const d = new Date();
// d.setDate(15);
// document.getElementById("demo").innerHTML = d;

function checkResponse(question) {
    var questionStr = question.toLowerCase();

    for (var i = 0; i < answersArray.length; i++) {
        var element = answersArray[i];

        if (questionStr.includes(element.key)) {
            printAnswer(element.value);
            return;
        }
    }
}