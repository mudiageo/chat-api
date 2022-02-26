const axios = require("axios")
const prompt = 'My name is Albert Einstein. I am a theoretical physicist who developed the theory of relativity. /n'
const express = require('express')
//const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

// Configuring body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
    axios.post('http://api.vicgalle.net:5000/generate',{
    context: prompt,

                temperature: 0.8,

                token_max_length: 100,

                top_p: 1,

                

                stop_sequence: '\n',
},
  {
                headers: {
                    'Content-Type': 'application/json',
                    
                }
})
  .then(function (response) {
    //console.log(response.data.text)
res.send(response.data.text)
  })
  .catch(function (error) {
    console.log(error);
  });
;
});
app.post('/', (req, res) => {
   axios.post('http://api.vicgalle.net:5000/generate',{
    context: prompt,

                temperature: 0.8,

                token_max_length: 100,

                top_p: 1,

                

                stop_sequence: '\n',
},
  {
                headers: {
                    'Content-Type': 'application/json',
                    
                }
})
  .then(function (response) {
    res.send(response.data.text)

  })
  .catch(function (error) {
    console.log(error);
  });

});

app.listen(port, () => console.log(`Chat API listening on port ${port}!`));

    
