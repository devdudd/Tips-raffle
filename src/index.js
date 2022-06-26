import express from 'express';
const app = express();
app.use(express.json());

import { create } from './Controllers/create-controller.js';
create(app);
import { tips } from './Controllers/tips-controller.js'
tips(app);

app.listen(3000, () => {
    console.log('Running on port 3000');
})