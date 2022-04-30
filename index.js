function receivesAFunction(cb1){
    cb1();
    return "Yes!";
}

function returnsANamedFunction(){
    const namedFunction = function(){
        return 1;
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function(){
        return 1;
    }
}