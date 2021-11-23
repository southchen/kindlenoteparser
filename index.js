var path = require('path');
var curPath = path.resolve();
var kindleClipping = require('kindle-clipping');
var result = kindleClipping(
  ''.concat(curPath, '/My Clippings.txt')
).getMergedJson();
var slicedResult = result.slice(0, 100);
console.log(slicedResult.filter((r) => r.type !== 'Note'));
var reduceByBookName = slicedResult.reduce(function (arr, note) {
  var curBook = arr.find(function (book) {
    book.name === note.bookName;
  });
  // if (!curBook) {
  //   let bookNote = {name:note.bookName,notes:[{content:note}]}
  //   arr.push();
  // }else{
  //   curBook.notes.push(note)
  // }
}, []);
