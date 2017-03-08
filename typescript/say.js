var student = (function () {
    function student(first, last) {
        this.first = first;
        this.last = last;
        this.fullname = first + " " + last;
    }
    return student;
}());
function say(person) {
    return "hello" + person;
}
var user = { first: "pedro", last: "cardoso" };
console.log(say(user));
