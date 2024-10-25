import Query from "../model/Query.js";

async function getAllTeas(req, res) {
    try {
        const query = "SELECT * FROM tea JOIN tea_packaging ON tea_packaging.tea_id = tea.id GROUP BY tea.label_1";
        const [data] = await Query.find(query);
        res.status(200).json(data);
    } catch (err) {
        throw Error(err);
    }
}

async function getLastTea(req, res) {
    try {
        const query = "SELECT t.*, tp.* FROM tea AS t JOIN tea_packaging AS tp ON t.id = tp.tea_id WHERE t.id = (SELECT MAX(id) FROM tea) ORDER BY tp.price;"
        const [data] = await Query.find(query);
        res.status(200).json(data[0]);
    } catch (err) {
        throw Error(err);
    }
}

async function getBestSeller(req, res) {
    try {
        const query = "SELECT t.*, tp.* FROM tea AS t JOIN tea_packaging AS tp ON t.id = tp.tea_id WHERE t.id = (SELECT MAX(id) FROM tea) ORDER BY tp.price;"
        const [data] = await Query.find(query);
        res.status(200).json(data[0]);
    } catch (err) {
        throw Error(err);
    }
}

async function getFavourite(req, res) {
    try {
        const query = "SELECT t.*, tp.* FROM tea AS t JOIN tea_packaging AS tp ON t.id = tp.tea_id WHERE t.our_favourite = (SELECT MAX(our_favourite) FROM tea);"
        const [data] = await Query.find(query);
        res.status(200).json(data[0]);
    } catch (err) {
        throw Error(err);
    }
}

async function getTeaPackages(req, res) {
    try {
        const query = "SELECT * FROM tea_packaging AS tp JOIN packaging AS p ON p.id = tp.packaging_id WHERE tp.tea_id = ?";
        const [data] = await Query.findByValue(query, req.params.id);    
        res.status(200).json(data);
    } catch (err) {
        throw Error(err);
    }
}

async function getTeaByURL(req, res) {
    try {
        const query = "SELECT * FROM tea WHERE id = ? AND url_tea = ?";
        const [data] = await Query.findByDatas(query, req.params);    
        res.status(200).json(data[0]);
    } catch (err) {
        throw Error(err);
    }
}

export { 
    getAllTeas, 
    getLastTea,
    getBestSeller,
    getFavourite, 
    getTeaPackages,
    getTeaByURL, 
};