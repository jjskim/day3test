'user strict';

// Arrays

var myCats = ['BuddyCat', 'Alistair', 'Trillian'];
// "var myCats" is a variable declaration
// "= ['BuddyCat', 'Alistair', 'Trillian',]" is the assignment
// the "=" sign is called an assignment operator

var randomCrap = [true, 4, 'WTF', myCats];

// We use 'for' loops to iterate over arrays.
for(var i = 0; i < myCats.length; i++) {
  console.log(myCats[i].toUpperCase());
}

for (var i = 0; i < myCats.length; i++) {
  if (myCats[i] === 'Trillian') {
    console.log('Trill!!!!');
  } else {
    console.log(':-( not Trill :-(');
  }
}

// do while loops
var y = 0;
do {
  console.log(y, 'is the value of y');
  y++
} while (y < 0);
