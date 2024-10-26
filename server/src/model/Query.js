import pool from "../config/db.js";

class Query {
    static async query(queryText){
        return await pool.query(queryText);
    }

    static async queryByValue(queryText, value){
        return await pool.query(queryText, [value]);
    }

    static async queryByObject(queryText, object){
        return await pool.query(queryText, [...Object.values(object)]);
    }

    static async queryByArray(queryText, array){
        return await pool.query(queryText, array);
    }
}

export default Query;