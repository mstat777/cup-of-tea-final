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

async function getTeaByValues(req, res) {
    try {
        const query = "SELECT * FROM tea JOIN tea_packaging ON tea_packaging.tea_id = tea.id WHERE tea.url_tea = ? AND tea.id = ?";
        const [data] = await Query.findByDatas(query, req.params);    
        res.status(200).json(data);
    } catch (err) {
        throw Error(err);
    }
}

async function getLastTea(req, res) {
    try {
        const query = "SELECT * FROM tea WHERE id = (SELECT MAX(id) FROM tea);"
        const [data] = await Query.find(query);
        res.status(200).json(data[0]);
    } catch (err) {
        throw Error(err);
    }
}

export { getAllTeas, getTeaByValues, getLastTea };