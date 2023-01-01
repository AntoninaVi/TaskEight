const ThingsICanDo = [

    "news",
    "facts",
    "ofacebook",
    "tell me a joke",
    "commands",
    "list",
    "features",
    "open google",
    "open youtube",
    "shutdown",
];

const ListThings = ThingsICanDo => "You can try asking the following: <br><br><br>" + ThingsICanDo.join("<br/><br/>");

const Random = list => list[Math.floor(Math.random() * list.length)];

const WhatCanIDo = ThingsICanDo => Random(ThingsICanDo);


const Links = {
    "facebook": "https://www.facebook.com",
    "google": "https://www.google.in",

    "youtube": "https://www.youtube.com",

    "Weather": "https://www.bbc.com/weather",
    "news": "https://www.bbc.com/news",

    "calculations": "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.calculator.net/&ved=2ahUKEwjZtc_KrfvuAhX3xzgGHYCyC88QFjAEegQIJxAC&usg=AOvVaw2WV3RjBeKCGyY49sfmLlNK&cshid=1613923530345"

};

const getLink = siteName => `Click here to open <a href="${Links[siteName]}" target="_blank">${siteName}</a>`;


const Jokes = [
    "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says, 'Can’t you see the warning on the cigarette pack? Smoking is hazardous to your health!' to which the man replies, 'I am a programmer. We don’t worry about warnings; we only worry about errors.'",
    "Jesus and Satan have an argument as to who is the better programmer. This goes on for a few hours until they come to an agreement to hold a contest with God as the judge. They set themselves before their computers and begin. <br><br>They type furiously, lines of code streaming up the screen, for several hours straight. Seconds before the end of the competition, a bolt of lightning strikes, taking out the electricity.  Moments later, the power is restored, and God announces that the contest is over. <br><br>He asks Satan to show his work. Visibly upset, Satan cries and says, 'I have nothing. I lost it all when the power went out.' 'Very well,' says God, 'let us see if Jesus has fared any better.' Jesus presses a key, and the screen comes to life in vivid display, the voices of an angelic choir pour forth from the speakers. Satan is astonished.  He stutters, 'B-b-but how?! I lost everything, yet Jesus' program is intact!  How did he do it?' God chuckles, 'Everybody knows… Jesus saves.'",
    "Two strings walk into a bar and sit down. The bartender says, 'So what'll it be?' The first string says, 'I think I'll have a beer quag fulk boorg jdk^CjfdLk jk3s d#f67howe%^U r89nvy owmc63^Dz x.xvcu' to which the second string says 'Please excuse my friend, he isn't null-terminated.'",

];

const TellAJoke = Jokes => Random(Jokes);
const Facts = [

    "In 1903 the Wright brothers flew for 59 seconds. 38 years later the Japanese bombed Pearl Harbor. 28 years after that, we landed on the moon.",
    "Blue whales heart is the size of a VW Beetle and that you could swim through some of its arteries.",
];

const TellAFacts = Facts => Random(Facts);

const Story = [

    "A man and a young teenage boy checked into a hotel and were shown to their room. The receptionist noted the quiet manner of the guests and the pale appearance of the boy. Later, the man and boy ate dinner in the hotel restaurant. <br/>The staff again noticed that the two guests were very quiet and that the boy seemed disinterested in his food. <br/>After eating, the boy went to his room and the man went to ask the receptionist to see the manager. The receptionist initially asked if there was a problem with the service or the room, and offered to fix things, but the man said that there was no problem of the sort and repeated his request. <br/>When the manager appeared, he took him aside and explained that he was spending the night in the hotel with his fourteen-year-old son, who was seriously ill, probably terminally so. The boy was very soon to undergo therapy, which would cause him to lose his hair. They had come to the hotel to have a break together and also because the boy planned to shave his head, that night, rather than feel that the illness was beating him. The father said that he would be shaving his own head too, in support of his son. <br/>He asked that staff be respectful when the two of them came to breakfast with their shaved heads.<br/>The manager assured the father that he would inform all staff and that they would behave appropriately. <br/>The following morning the father and son entered the restaurant for breakfast. There they saw the four male restaurant staff attending to their duties, perfectly normally, all with shaved heads.<br/>No matter what business you are in, you can help people and you can make a difference. ",
    "The Mehta family was lounging around in the living room one evening, when suddenly Dadaji asked Rohan, “What would you like for your birthday?”Rohan, who was listlessly lolling around, trying to read a book, perked up.“A watch! A watch!” He cried excitedly. “I have been wanting a watch for the longest time!”Rohan was turning twelve next Sunday and he knew that whatever presents his parents gave him were always useful ones. Last year, they had bought him two pairs of shoes as he had outgrown his old shoes. Who gives shoes as a birthday present?! This year too, would be no different…it would either be new jeans or a new school bag. UGH! Of course, he could never express his thoughts in front of his parents.Dadaji was his only hope.The days crawled by and finally, Sunday morning heralded its arrival with the ring of the telephone. It was Rohan’s uncle calling from some remote area in Nagaland.“Hey Rohan! Happy Birthday, my young hero! What is the plan for today?” Rohan’s uncle was an officer in the Indian Army and Rohan was his favourite nephew.“Dadaji has promised to get me a watch so that is going to be the most exciting part of the day,” Rohan confided to his uncle.“That’s great! Do send me a picture,” replied his Uncle. They chatted some more and Rohan told him about the party that was planned for that evening. Rohan’s uncle knew most of Rohan’s friends. After saying bye, Rohan handed over the phone to his mother and ran off to have a bath.At the breakfast table, Rohan wolfed down his breakfast as Dadaji watched him from across the table, with a smile on his face and a twinkle in his eyes. There was a gift wrapped box lying next to him. Rohan couldn’t take his eyes off  it. It was small enough to have a watch inside it. Rohan could barely eat his breakfast, but with his mother’s eagle eyes watching him, he had no choice!Breakfast over, Dadaji beckoned him to come closer. He then handed over the box to Rohan.Rohan could barely conceal his excitement. He hugged Dadaji and smothered his face with kisses. Dadaji laughed.Inside the box was the most perfect watch Rohan had ever laid his eyes on. It had a round, navy blue dial with a red and blue striped strap. Rohan gazed at it in wonder.The best birthday gift everSuddenly, he jumped. What was that? The watch winked at him! Was he dreaming? He looked down at the watch again. It seemed to be smiling at him!“Dadaji! This is the best present, ever!” cried aRohan.As the day passed, Rohan noticed something strange. When he was happy, the watch seemed to smile and wink, but if he was sad or even a little upset about anything, the watch would begin to look dull and sad.“It’s almost as if it can read my thoughts,” thought Rohan to himself. “Almost like my twin!”Soon they were having secret conversations…Rohan would look down at his watch and the watch, reading  Rohan’s mind would wink and smile or frown and look grumpy!As the days passed, Rohan realised that his watch was turning into his dearest friend.<br/±>“What are you doing?’ asked Rohan’s mother one evening.<br>Rohan looked up. ””Nothing,” he replied.“Then why are you grinning goofily at your wrist watch?” she asked, sounding a little irritated. “You have been acting very strange ever since you got your watch. Do you really need to check the time ever so often?”<br/>“Sorry, Mummy,” said Rohan at once. He really must be careful. Nobody would ever believe him if he told them about the strange things his watch did. He could almost imagine the shocked look on the faces of his friends and relatives if he confided in them.<br/>“A smiling, winking watch which changes its moods according to yours? Have you gone mad?” they would snigger.<br/>Knowing his parents, they might just march him off to the nearest doctor. And even his grandfather, who was his closest friend and confidante, would wonder what had gone wrong with his grandson. He would become the laughing stock in school. He had better be careful!<br/>Rohan soon realised that he was beginning to depend a lot on his new best friend – his wrist watch. In class, whenever he would start writing any answers he would glance quickly at the watch. If the watch smiled and winked, he knew he was correct. On the other hand, if the watch began to look dull and grumpy, Rohan knew at once that he was going off track and he needed to pull up his socks. This strange connection with his new watch actually helped him and he found himself studying harder just to see his watch smile.<br/>Rohan, who was an average student, suddenly began topping his class. His classmates noticed the refreshing change in Rohan. He came to school each morning with a spring in his step. He was confident and friendly, a far cry from the old Rohan. His teachers began to appreciate his participation in class activities.<br/>The best birthday gift ever“What had changed?” they wondered collectively. The only new thing that everyone noticed about Rohan was the shiny wristwatch he wore on his left wrist. Of course, his other classmates too had wrist watches, but somehow, this one was different. But nobody could figure out how or why.<br/>“He’s superstitious,” was the unanimous decision in class. “He likes to look at his watch before giving any answers.”<br/>The teachers, who earlier would scold Rohan for looking at his watch time and again also believed the superstition theory and soon began to overlook his quirky behaviour.<br/>At home, Rohan was careful not to look at his watch when his parents were around. Dadaji of course felt that Rohan was completely obsessed by his birthday gift! Little did he know that Rohan and his watch would be having secret conversations all the time!<br/>Nobody knew how this turnaround took place. Only Rohan knew the secret and now you do, too!"
];


const TellAStory = Story => Random(Story);

const illegals = [
    "window",
    ...Object.keys(window),
    ...Object.keys(document),
    ...Object.keys(Element.prototype)
];

const isLegal = string => {

    let Legal = true;

    illegals.forEach(illegal => {

        if (string.indexOf(illegal) !== -1) {
            Legal = false;
        }

    });

    return Legal;
}

const HtmlSpecialChars = string => {

    let escapedString = string;

    HtmlSpecialChars.specialchars.forEach(
        chr => {

            escapedString = escapedString.replace(
                new RegExp(chr[0], 'g'),
                chr[1]
            );

        });


    return escapedString;
};

HtmlSpecialChars.specialchars = [
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;']
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];


const today = monthNames => {
    let date = new Date();

    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}


const now = () => {
    let date = new Date();

    return date.toLocaleTimeString();
}

const Evaluate = expression => {
    try {
        if (isLegal(expression)) {


            const result = eval(HtmlSpecialChars(expression));
            return result;

        }
        else {
            return "error";
        }
    }

    catch (err) {
        return "error";
    }
}

const Answers = {
    "features": ListThings(ThingsICanDo),
    "commands": ListThings(ThingsICanDo),
    "guide": ListThings(ThingsICanDo),
    "list": ListThings(ThingsICanDo),
    "joke": TellAJoke(Jokes),
    "story": TellAStory(Story),
    "facts": TellAFacts(Facts),
    "fact": TellAFacts(Facts),

    "hello": "Hello %U% . How can I help ? ",
    "hey trek": "Hey %U%. How can I help ? ",
    "hey bro": "Hey  %U%. How can I help ? ",
    "hi": "Hi %U%",

    "date": "Its " + today(monthNames) + " today. Make this day a great one 😀",
    "time": "The time is " + now() + " in your region.",
    "facebook": getLink("facebook"),
    "google": getLink("google"),

    "youtube": getLink("youtube"),
    "chrome": getLink("chrome"),
    "weather": getLink("weather"),
    "news": getLink("news"),
    "calculations": getLink("calculations"),
};


const Notfound = "Sorry, I have no answers for this input.<br/><br/>type guide for help :)";

const Invalid = "Indeed !!";


const D = window.document;

const element = selector => D.querySelector(selector);

const Answer = (Main, User, Text) => {
    let Flag = false;

    const Result = Evaluate(Text);

    text = Text.toLowerCase();

    Object.keys(Answers).forEach(key => {

        if (!Flag) {
            if (text.indexOf(key) !== -1) {

                addAnswer(
                    Main,
                    Answers[key].replace(
                        "%U%",
                        User
                    )
                );

                Flag = true;

            }

            else if (typeof Result == "number") {

                addAnswer(
                    Main,
                    `${Text} equals ${Result}`
                );

                Flag = true;

            }

        }

    });

    if (!Flag) {
        addAnswer(Main, Notfound);
    }


};

const addQuestion = (Main, text) => {
    Main.innerHTML += `
        <div class="row">
            <div class="chat question shadow">${text}</div>
        </div>
    `;
}

const addAnswer = (Main, text) => {
    Main.innerHTML += `
    <div class="row">
        <div class="chat answer shadow">${text}</div>
    </div>
    `;
}


D.addEventListener("DOMContentLoaded", () => {

    const Main = element("main");

    const Askbtn = element("button");

    const Question = element("input");

    const Lastdiv = element("#last");

    let User = ("");

    while (User === null || User === '') {

        User = (" ");

    }

    Question.focus();

    const Ask = () => {

        const Text = Question.value;

        if (Text.length) {

            addQuestion(Main, Text);

            Question.value = "";

            Answer(Main, User, Text);

        }
    };


    Askbtn.addEventListener("click", Ask);

    Question.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) Ask();
    });

    addAnswer(Main, `Hello my friend`);

});

setTimeout(() => {
    addAnswers.innerText = `${addQuestion}`;
  }, 6000
  )



// function addChatEntry(input, product) {
//     const messagesContainer = document.getElementById("messages");
//     let userDiv = document.createElement("div");
//     userDiv.id = "user";
//     userDiv.className = "user response";
//     userDiv.innerHTML = `<span>${input}</span>`;
//     messagesContainer.appendChild(userDiv);

//     let botDiv = document.createElement("div");
//     let botText = document.createElement("span");
//     botDiv.id = "bot";
//     botDiv.className = "bot response";
//     botText.innerText = "Typing...";
//     botDiv.appendChild(botText);
//     messagesContainer.appendChild(botDiv);

//     messagesContainer.scrollTop =
//         messagesContainer.scrollHeight - messagesContainer.clientHeight;

//     setTimeout(() => {
//         botText.innerText = `${product}`;
//     }, 5000);
// }


// SKETCH
