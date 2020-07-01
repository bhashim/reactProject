const express = require('express');
const cors = require('cors');

require('./config/mongoose.config');
const app = express();

function middleware(req, res, next) {
    console.log('inside middleware!')
    next();
}

app.use(middleware);
app.use(cors());
app.use(express.json());

const reactProjectsRoutesFunc = require('./routes/reactProjects.routes');
reactProjectsRoutesFunc(app);


app.listen(8000, () => console.log('listening on port 8000'));