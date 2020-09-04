/////////////////////////////
// Lecture: Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);





/////////////////////////////
// Lecture: Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

/*

//Primitives vs objects

//Primitives
var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b); 

//objects
var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Fonctions

var age = 27;
var obj = {
    name: 'jonas',
    city: 'lesbion'
};

function change(a, b) {
    a = 30;
    b.city = 'San francisco';
    console.log(a);
}

change (age, obj);

console.log(age);
console.log(obj.city);
*/

/////////////////////////////
// Lecture: Passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {

    return 2016-el;
}

function isFullAge(el) {

    return el >= 18;
}

function maxHeartRate(el) {

    if(el >=18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el)) ;

    }else {
        return -1;
    }
    
}




var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/////////////////////////////
// Lecture: Functions returning functions

/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can u please explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('hello' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('john');
designerQuestion('john');

interviewQuestion('teacher')('mark');
*/

/////////////////////////////
//Lecture: IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

/*

(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

/////////////////////////////
//Lecture: Closures

/*
function retirement(retirementAge) {
    var a = ' years left until riterement.'
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(64)(1995);

function interviewQuestion(job) {

    return function(name) {

    if(job === 'designer') {

       console.log(name + ', can u please explain what UX design is?');

    } else if(job === 'teacher') {
    
        console.log('what subject do you teach, ' + name + '?');

    } else {
        
            console.log('hello' + name + ', what do you do?');
        }
    }
}
interviewQuestion('teacher')('john');
*/

/////////////////////////////
//Lecture: Bind, call and apply

/*
var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeofDay) {
        if(style === 'formal') {
            console.log('Good ' + timeofDay +
            ', ladies and gentelmen! I\'m' +
            this.name + ', I\'m '+ this.job +
            ' and I\'m ' + this.age + ' years old.');

        } else if (style === "friendly") {
            console.log('Hey! what\'s up? I\'m ' +
            this.name + ', I\'m '+ this.job +
            ' and I\'m ' + this.age + ' years old. have a nice ' + timeofDay + '.');
        }
    }
};

var emily = {
    name: 'emily',
    age: 35,
    job: 'designer'
};


john.presentation('formal','morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly','morning']);

var johnFriendly = john.presentation.bind(john,'friendly')('night');

var emilyformal = john.presentation.bind(emily,'formal')('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {

    var arrRes = [];

    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

        return arrRes;
    }

    function calculateAge(el) {

        return 2016-el;
    }

    function isFullAge(limit, el) {

        return el >= limit;
    }

    var ages = arrayCalc(years, calculateAge);

    var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
    console.log(ages);
    console.log(fullJapan);
    */

///////////////////////////////////////
//coding challange

/*
(function() {

function Question(question, answers, correct) {

    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = 

function() {

    console.log(this.question);

    for(var i = 0; i < this.answers.length; i++) {

        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = 

function(ans) {
    if(ans === this.correct) {

        console.log('correct answer!');

    } else {
        console.log('wrong answer, try again :)');
    }
}

var q1 = new Question(
    'Is JavaScript the coolest prgramming langauge in the world?',
    ['Yes','No'],
    0);

var q2 = new Question(
    'what is the name of this course\'s teacher?',
    ['john','mike','Bilal'],
    2);

var q3 = new Question(
    'what does best describe coding?',
    ['Boring','Hard','Fun','tedious'],
    2);

var questions = [q1, q2, q3];

var n = Math.floor( Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt('please select the correct answer.')) ;

questions[n].checkAnswer(answer);

})();
*/

(function() {

    function Question(question, answers, correct) {
    
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = 
    
    function() {
    
        console.log(this.question);
    
        for(var i = 0; i < this.answers.length; i++) {
    
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
    
    function(ans, callback) {
        var sc;

        if(ans === this.correct) {
    
            console.log('correct answer!');

            sc = callback(true);
    
        } else {
            console.log('wrong answer, try again :)');

            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = 
    function(score) {
        console.log('your current score is ' + score);
        console.log('----------------------------------')
    }
    
    var q1 = new Question(
        'Is JavaScript the coolest prgramming langauge in the world?',
        ['Yes','No'],
        0);
    
    var q2 = new Question(
        'what is the name of this course\'s teacher?',
        ['john','mike','Bilal'],
        2);
    
    var q3 = new Question(
        'what does best describe coding?',
        ['Boring','Hard','Fun','tedious'],
        2);

    
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;

        return function(correct) {
            if (correct) {

                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
            
        
        var n = Math.floor( Math.random() * questions.length);
        
        questions[n].displayQuestion();
        
        var answer = prompt('please select the correct answer.');
        
        if(answer !== 'exit') {

            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }        
    }
    
    nextQuestion();
    
    
})();