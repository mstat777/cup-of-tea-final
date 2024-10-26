import Query from "../model/Query.js";

async function getAllCategories(req, res) {
    try {
        const query = "SELECT * FROM category";
        const [data] = await Query.query(query);
        res.status(200).json(data);
    } catch (err) {
        throw Error(err);
    }
}

export { getAllCategories };