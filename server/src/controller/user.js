import Query from "../model/Query.js"
import { hash } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const { sign } = jsonwebtoken;
const { SK } = process.env;
const SALT = 10;

async function checkToken(req, res) {
    try {
        const queryUser = "SELECT label FROM user WHERE label = ?";
        await Query.findByValue(queryUser, req.params.label);
        res.status(200).json({msg: "authentifié"});
    } catch (err) {
        throw Error(err);
    }
}

async function signIn(req, res) {
    try {
        let msg = "";
        
        const queryUser = "SELECT * FROM user WHERE label = ?";
        const [user] = await Query.findByValue(queryUser, req.body.label);
        if (user.length) {
            msg = "utilisateur trouvé";
            const TOKEN = sign({ label: user[0].label }, SK);
            res.status(200).json({ msg, TOKEN });
        } else if (!user.length) {
            msg = "mauvais identifiants";
            res.status(409).json({ msg });
        }
    } catch (err) {
        throw Error(err);
    }
}

async function createAccount(req, res) {
    try {
        let msg = "";
        const datas = { label: req.body.label, email: req.body.email}; 
        const queryUser = "SELECT label, email FROM user WHERE label = ? OR email = ?";
        const [user] = await Query.findByDatas(queryUser, datas);

        if (user.length) {
            msg = "un utilisateur avec cet identifiant ou email existe déjà";
            res.status(409).json({ msg });
        } else if (!user.length) {
            console.log(req.body);

            const datas = {
                label: req.body.label,
                email: req.body.email,
                password: await hash(req.body.password, SALT),
            };

            const query =
                "INSERT INTO user (label, email, password, role, created_at) VALUES(?, ?, ?, 'user', NOW())";
            await Query.write(query, datas);

            msg = "utilisateur créé";
            res.status(201).json({ msg });
        }
    } catch (err) {
        throw Error(err);
    }
}

export { checkToken, signIn, createAccount };