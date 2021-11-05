let str = "HELLOWORLD"

let reverseString = (string)=>{
    // turn string into an array of chars first
    let stringArr = string.split("")
    let arrEmpty = []
    // console.log(stringArr)
    // console.log(stringArr.length)
    // and we use a loop to count it down from the last char to the first and print it out
    for(let i = stringArr.length-1; i>=0; i--){
        // console.log(i)
        console.log(stringArr[i])
        // now we have all the chars back to front
        // assemble them back into a array, push()?
        // need a empty array to add to
        arrEmpty.push(stringArr[i])
        console.log(arrEmpty)
        // turn the reversed array back into a string and print
        console.log(arrEmpty.join(""))
        // we're done!
    }
};

reverseString(str)