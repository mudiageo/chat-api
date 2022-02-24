const axios = require("axios")
const prompt = 'My name is Albert Einstein. I am a theoretical physicist who developed the theory of relativity. /n'

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
    console.log(response.body.text)
  })
  .catch(function (error) {
    console.log(error);
  });
