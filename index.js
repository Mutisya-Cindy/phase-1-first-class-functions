function receivesAFunction (callback) {
  callback()
}

function returnsANamedFunction() {
    return function named() {
      console.log("The boy is Charles.")
    }
}

function returnsAnAnonymousFunction() {
    return function() {console.log("The boy is not named")}
}