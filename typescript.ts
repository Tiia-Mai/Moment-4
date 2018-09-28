
declare function require(name:string); // Make it possible to use require in TypeScript

var fs = require('fs');

function readContent(callback){
  
     fs.readFile('hitch.txt', 'utf8', function(err, data) {  
    if (err) throw err; 
    callback(null,data)
                 
});
}


readContent(function(err,data){
    let reg:RegExp = /\n| /;  // Strip of all new lines and blanks
    const clean = data.split(reg); 
    
    let count = {};  //create array count what includes all words and upcoming amount
    for(let i of clean){
        count[i] = (count[i]||0) + 1;
    }

    var sorted = []; // Declare a new array
    for (let key in count) sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
    sorted.sort(function (a, b) { return a[1] - b[1] }); // Sort the array based on the second element (count)
    sorted.reverse(); // Reverse the result array
    
    var num:number=0;
    var i:number;
    for (i = num; i < 10; i ++){ //Write out first 10 objects in array sorted
        console.log(sorted[i]);
    };

    
})