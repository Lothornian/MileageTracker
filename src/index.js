import Express from 'express';
import Parser from 'body-parser';
import {loadData} from './data/data.js';

import UserRoute from './routes/UserRoute.js';

const app = Express();
const port = process.env.PORT || 6000;

loadData();

app.use(Parser.json());
app.use('/Users', UserRoute);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;
