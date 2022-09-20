const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
//------------------------------------------------------------------------------------------------------------//
const PORT = 3000;
//------------------------------------------------------------------------------------------------------------//
// Routes

//------------------------------------------------------------------------------------------------------------//

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//------------------------------------------------------------------------------------------------------------//
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
//------------------------------------------------------------------------------------------------------------//
app.listen(PORT, () => console.log('Listening on Port', PORT))

//------------------------------------------------------------------------------------------------------------//
module.exports = app;