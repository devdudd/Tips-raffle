import { Tip } from '../Models/create-model.js';
import { db } from '../Infra/db.js';

export const create = (app) => {
    app.post('/creat', (req, res) => {
        const body = req.body;
        const newTip = new Tip(body.tip);
        db.tips.push(newTip)
        res.json({'Tip': newTip})
    })
}