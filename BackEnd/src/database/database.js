import Database from "better-sqlite3";
import * as queries from "../database/databasequerys.js"
import {insertDummyData} from "../database/database-helper.js";

export let db;

try {
    db = new Database('C:\\Users\\Tavarista\\Desktop\\uni\\1 YEAR\\4º-Quartile\\Web Basics\\Final Project\\BackEnd\\db\\data.sqlite');
    db.prepare(queries.createArtistTable).run();
    db.prepare(queries.createAlbumsTable).run();
    db.prepare(queries.createTracksTable).run();

    insertDummyData()
} catch (e) {
    console.error("Error while initializing db!", e);
    throw e;
}
