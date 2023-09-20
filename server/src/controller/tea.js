import Query from "../model/Query.js";

async function getAllTeas(req, res) {
    const query = "SELECT * FROM tea JOIN tea_packaging ON tea_packaging.tea_id = tea.id GROUP BY tea.label_1";
    const [data] = await Query.find(query);
    res.status(200).json({data});
}

async function getByValues(req, res) {
    const query = "SELECT * FROM tea JOIN tea_packaging ON tea_packaging.tea_id = tea.id WHERE tea.url_tea = ? AND tea.id = ?";
    const [data] = await Query.findByDatas(query, req.params);
    if(!data.length){
        res.status(404).json({msg: "route inconnue"})
    }
    if(data.length) {        
        res.status(200).json(data);
        return;
    }
}

export { getAllTeas, getByValues };