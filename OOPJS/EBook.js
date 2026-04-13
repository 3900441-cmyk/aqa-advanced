import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() { 
        return this._fileFormat; 
    }
    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB'];
        if (typeof value !== 'string' || !validFormats.includes(value.toUpperCase())) {
            throw new Error(`Некоректний формат. Дозволені формати: ${validFormats.join(', ')}`);
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`);
    }

    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}