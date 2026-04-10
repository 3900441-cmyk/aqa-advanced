export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() { 
        return this._title; 
    }
    set title(value) {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Вкажіть назву. Назва не може бути порожнім рядком.");
        }
        this._title = value;
    }

    get author() { 
        return this._author; 
    }
    set author(value) {
        if (typeof value !== 'string' || value.trim().length === 0) {
            throw new Error("Вкажіть автора. Автор не можу бути порожнім рядком.");
        }
        this._author = value;
    }

    get year() { 
        return this._year; 
    }
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== 'number' || value < 0 || value > currentYear) {
            throw new Error("Вкажіть рік видання.");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}`);
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) return null;
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}