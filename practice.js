//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

    // to allow flexibility in the scope of the function, especially when using the same function with multiple object sets.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer

    // 1. Explicit - specifically give scope through 'call', 'apply', and 'bind'.
    // 2. Implicit - give implied scope using the object to the left of the '.function'.
    // 3. Global - default scope if the scope is not defined through explicit or implicit definitions.
    // 4. New - used on constructor functions, to create many objects with a single function.

  // 3) What is the difference between call and apply?

      //Answer

    // Call passing in the scope object and the variable individually (separated by commas), while
    // Apply passes in the scope object with the variable in an array.

  // 4) What does .bind do?

      //Answer

    // .bind creates a copy of the function with the scope permanetly bound to the function.

//Next Problem

//Create an object called user which has the following properties.

  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
  //*Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "username",
      email: "email@domain.com",
      getUsername: function() {
        return this.username;
      }
    }
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make,model,year,move) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.move = move,
  this.moveCar = function() {
    return this.move += 10;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper
//syntax that will allow for you to call the getYear function with the prius then the mustang objects being
//the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here

      // undefined (username is not defined in the global scope and 'this' has no direct reference
      // either implicit or explicit)

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

      // the global variable 'username'

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
