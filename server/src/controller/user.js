import Query from "../model/Query.js"
import { hash } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const { sign } = jsonwebtoken;
const { SK } = process.env;
const SALT = 10;

async function checkToken(req, res) {
    try {
        const queryUser = "SELECT username FROM user WHERE username = ?";
        await Query.queryByValue(queryUser, req.params.username);
        res.status(200).json({msg: "authentifié"});
    } catch (err) {
        throw Error(err);
    }
}

async function signIn(req, res) {
    try {
        let msg = "";
        
        const queryUser = "SELECT * FROM user WHERE username = ?";
        const [user] = await Query.queryByValue(queryUser, req.body.username);
        if (user.length) {
            msg = "utilisateur trouvé";
            const TOKEN = sign({ username: user[0].username }, SK);
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
        const data = { username: req.body.username, email: req.body.email}; 
        const queryUser = "SELECT username, email FROM user WHERE username = ? OR email = ?";
        const [user] = await Query.queryByObject(queryUser, data);

        if (user.length) {
            msg = "un utilisateur avec cet identifiant ou email existe déjà";
            res.status(409).json({ msg });
        } else if (!user.length) {
            console.log(req.body);

            const data = {
                username: req.body.username,
                email: req.body.email,
                password: await hash(req.body.password, SALT),
            };

            const query =
                "INSERT INTO user (username, email, password, role, created_at) VALUES(?, ?, ?, 'user', NOW())";
            await Query.queryByObject(query, data);

            msg = "utilisateur créé";
            res.status(201).json({ msg });
        }
    } catch (err) {
        throw Error(err);
    }
}

export { checkToken, signIn, createAccount };