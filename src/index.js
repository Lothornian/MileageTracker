import Express from 'express';
import Parser from 'body-parser';

import UserRoute from './routes/UserRoute.js';

const app = Express();
const port = process.env.PORT || 6000;

app.use(Parser.json());
app.use('/Users', UserRoute);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;
