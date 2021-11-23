const path = require('path');
const curPath = path.resolve();

const kindleClipping = require('kindle-clipping');
// console.log(kindleClipping);
const result = kindleClipping(`${curPath}/My Clippings.txt`).getMergedJson();
const slicedResult = result.slice(0, 100);
type Note = {
  content: string;
};
type Book = {
  name: string;
  id: number;
  notes: Note[];
};

const reduceByBookName = slicedResult.reduce((arr, note) => {
  const curBook = arr.find((book) => {
    book.bookName === note.bookName;
  });
  if (!curBook) {
    arr.push(note);
  }
}, [] as Book[]);
