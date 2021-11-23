const path = require('path');
const curPath = path.resolve();
import kindleClipping, { Note } from 'kindle-clipping';

const result = kindleClipping(`${curPath}/My Clippings.txt`).getJson();
const slicedResult = result.slice(0, 100);
const highlight = slicedResult.filter((r: Note) => r.type === 'Highlight');

type BookHighlight = {
  content: string;
};
type Book = {
  name: string;
  // id: number;
  highlight: BookHighlight[];
};

const reduceByBookName = highlight.reduce((arr, note) => {
  const curBook = arr.find((book) => {
    return book.name === note.bookName;
  });
  if (!curBook) {
    let bookNote = {
      name: note.bookName,
      highlight: [{ content: note.content }],
    };
    arr.push(bookNote);
  } else {
    curBook.highlight.push({ content: note.content });
  }
  return arr;
}, [] as Book[]);
