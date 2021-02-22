function filterOutOdds ()
{
    const nums = [...arguments].filter(num=>num%2===0);
    return nums;
};

function findMin(...nums){
    return nums.reduce((num,next)=>num<next? num:next);
}

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}

function doubleAndReturns(arr,...nums){
    return [...arr,...nums].map(v=>v*2);
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const randomNum = Math.floor(Math.random()*items.length);
    return [...items].filter((v,i)=>i==randomNum? false:true)}
    ;

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1,array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>{
    const returnedobj = {...obj};
    returnedobj[key]=val;
    return returnedobj
};


/** Return a new object with a key removed. */

const removeKey = (obj, key) =>{
    const myObj = {...obj};
    delete myObj[key];
    return myObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) =>({...obj1,...obj2});



/** Return a new object with a modified key and value. */

const update = (obj, key, val) =>{
    const myObj = {...obj};
    myObj[key]=val;
    return {...myObj};
}