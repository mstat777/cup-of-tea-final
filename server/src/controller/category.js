import Query from "../model/Query.js";

async function getAllCategories(req, res) {
    const query = "SELECT * FROM category";
    const [data] = await Query.find(query);
    res.status(200).json({data});
}

export { getAllCategories };