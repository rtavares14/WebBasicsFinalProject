// Import database from sqlite
import Database from "better-sqlite3";
import {albumsRated, albumsToListening, artists} from "../data/dummy-date.js";


// Create a new DB file
let db;
try {
    db = new Database('db/data.sqlite');
} catch (e) {
    console.error('Error while initializing db!', e);
    throw e;
}

//crete the tables if they not exist
//add dummy data if the tables are empty



