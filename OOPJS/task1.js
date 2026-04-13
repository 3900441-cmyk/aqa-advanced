import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book("Кайдашева сім'я", "Іван Семенович Нечуй-Левицький", 1879);
const book2 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 1912);
const book3 = new Book("Конотопська відьма", "Григорій Квітка-Основ'яненко", 1837);

console.log("Паперові книжки");
book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("Кобзар", "Тарас Шевченко", 1840, "EPUB");
console.log("\nЕлектронна книга");
ebook1.printInfo();

book1.year = 1881;
console.log(`\nЗмінений рік для "${book1.title}": ${book1.year}`);

const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.findOldestBook(allBooks);
console.log("\nНайдавніша книга в списку");
oldest.printInfo();

const convertedEbook = EBook.fromBook(book2, "PDF");
console.log("\nКонвертація з Book у EBook");
convertedEbook.printInfo();