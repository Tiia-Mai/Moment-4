var fs = require('fs');
function readContent(callback) {
    fs.readFile('hitch.txt', 'utf8', function (err, data) {
        if (err)
            throw err;
        callback(null, data);
    });
}
readContent(function (err, data) {
    var reg = /\n| /; // Strip of all new lines and blanks
    var clean = data.split(reg);
    var count = {}; //create array count what includes all words and upcoming amount
    for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
        var i_1 = clean_1[_i];
        count[i_1] = (count[i_1] || 0) + 1;
    }
    var sorted = []; // Declare a new array
    for (var key in count)
        sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
    sorted.sort(function (a, b) { return a[1] - b[1]; }); // Sort the array based on the second element (count)
    sorted.reverse(); // Reverse the result array
    var num = 0;
    var i;
    for (i = num; i < 10; i++) { //Write out first 10 objects in array sorted
        console.log(sorted[i]);
    }
    ;
});
