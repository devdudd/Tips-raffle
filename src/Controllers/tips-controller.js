import { db } from '../Infra/db.js';

export const tips = (app) => {
    app.get('/tips'), (req, res) => {
        const index = Math.floor(Math.random()*(db.tips.length - 0))
        res.jason(db.tips[index])
    }
}