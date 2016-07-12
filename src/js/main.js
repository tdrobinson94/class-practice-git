/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////    Classes!  Yay                                            ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// 1. ------------------------------------------------------------ //

// Create a simple class function called `Foo` and create a new
// instance from it called `foo`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
class Foo {
  constructor() {
  }
}
let foo = new Foo()

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(foo instanceof Foo);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 2. ------------------------------------------------------------ //

// Create a class function called `Dog` that sets a property
// on itself within the constructor. The property should be called
// `says` and the value should be `life is ruff`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

class Dog {
  constructor(dog) {
    this.says = 'life is ruff'
  }
}


// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(new Dog().says === "life is ruff");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 3. ------------------------------------------------------------ //

// Create a class function called `Cat` that has a method on
// it's prototype called `growl` that returns the string `meow`.
// create an instance of this called `cat`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

class Cat {
  growl(){
    return 'meow';
  }
}
let cat = new Cat()
cat.addGrowl
// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(cat instanceof Cat);
console.assert(cat.growl() === "meow");

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 4. ------------------------------------------------------------ //

// Create a class called `KeepSecret`. The constructor function
// itself should accept a parameter called `secret` it should store
// this in a private variable (use a closure). Add a method to the
// prototype that is called `squeal` that returns the secret string.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

class KeepSecret {
  constructor(secret) {
    this.secret = secret
  }
  squeal(){
    return this.secret
  }
}

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

let mySecret = "My class rocks!";
let dontTellNobody = new KeepSecret(mySecret);
console.assert(dontTellNobody.squeal() === mySecret);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// 5. ------------------------------------------------------------ //

// Create a class called `Key`. Create another class
// called `Safe`. Make the Safe constructor take 2 arguments. The
// first argument can be any piece if data to keep safe. This must
// be stored using a private variable like you did with KeepSecret.
// The 2nd param to the `Safe` constructor needs to be an instance
// of `Key` you need to store it privately as well. Add a function
// to the Safe prototype called `unlock` that accepts a key. If the
// key matches the key that was used to create the Safe; then return
// the secret data.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

class Key {
  constructor() {

  }
}
class Safe {
  constructor(safeStuff, key) {
    this.safeStuff = safeStuff
    this.key = key
    }
    unlock (key1){
      if (this.key === key1){
        return this.safeStuff;
      }
    }

}


// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

let sensitive = "shhhhh!";
let rightKey  = new Key();
let wrongKey  = new Key();
let safe      = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////                  ___                                        ////
////                 / _ )___  ___  __ _____                     ////
////                / _  / _ \/ _ \/ // (_-<                     ////
////               /____/\___/_//_/\_,_/___/                     ////
////                                                             ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Bonus. -------------------------------------------------------- //

// Create a class called `Validator`. Give it a method on it's
// prototype called `email` that takes a string and returns true if
// the string is a valid email address and false if it is not.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

if (typeof Validator === "function") {
  let valid = new Validator();
  console.assert(valid.email("name@theironyard.com"));
  console.assert(!valid.email("name-at-theironyard.com"));
}

// --------------------------------------------------------------- //
