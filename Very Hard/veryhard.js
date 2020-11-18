/*1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to  incorporate the syntax.
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { }
 */
'use strict'

function Person(name, job, age) {
    this.fullname = name;
    this.jobtitle = job;
    this.age = age;
};

//ES5 functions syntax
Person.prototype.exercise = function() {
    console.log(`Running is fun, but I rather cut hair.`);
};

Person.prototype.fetchjob = function() {
    console.log(`${this.fullname} is a ${this.jobtitle}`);
};

            // ES6 fcuntoin syntax
            // Person.prototype.bye = () => {
            //     console.log("Good-bye");
            // }

var person1 = new Person("Brad Mondo", "back end developer", "24"); 
person1.exercise()
person1.fetchjob()

function Programmer (name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;
}

Programmer.prototype.completeTask = function() {
    this.busy = false;
    document.getElementById("demo").innerHTML = this.busy;
}

Programmer.prototype.acceptNewTask = function() {
    this.busy = true;
    document.getElementById("demo").innerHTML = this.busy;
}

// var programmer1 = new Programmer("Mark Lu", "front-end developer", "25", ['js', 'html', 'css']); 
// console.log(programmer1);
// programmer1.completeTask();
// programmer1.acceptNewTask();


Programmer.prototype.offerNewTask = function() {
    if(this.busy === true) {
        console.log(`${this.fullname} can't accept any new tasks right now.`);
    } else {
        console.log(`${this.fullname} would love to take on a new responsibility`);
    }
}
// programmer1.offerNewTask();


Programmer.prototype.learnLanguage = function(newLanguages) {
    this.languages = this.languages.concat(newLanguages);
};
// programmer1.learnLanguage(['English', 'Spanish']);


Programmer.prototype.listLanguages = function(){
    for (var i = 0; i < this.languages.length; i++) {
        console.log(this.languages[i]);
    }
};
// programmer1.listLanguages();

var programmer1 = new Programmer("Mark Lu", "front-end developer", "25", ['js', 'html', 'css']); 
console.log(programmer1);
programmer1.completeTask();
programmer1.acceptNewTask();
programmer1.offerNewTask();
programmer1.learnLanguage(['English', 'Spanish']);
programmer1.listLanguages();

var programmer2 = new Programmer("Billy Mill", "back-end developer", "30", ["react", "go"]);
console.log(programmer2);
programmer2.completeTask();
// programmer2.acceptNewTask();
programmer2.offerNewTask();
programmer2.learnLanguage(['c++', 'c#', 'c']);
programmer2.listLanguages();

