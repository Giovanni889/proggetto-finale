const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("progetto.db");

db.serialize(() => {
    db.run(`CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        topic INTEGER DEFAULT 0
    )`);
});