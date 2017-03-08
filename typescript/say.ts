class student{
  fullname: string;

  constructor(public first, public last){
    this.fullname =  first +" " + last;

  }


}

interface IPerson{
    first: string;
    last: string;
}
function say(person: IPerson){

  return "hello"+person;

}
var user = {first:"pedro",last:"cardoso"};

console.log(say(user));
