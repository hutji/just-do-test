const axios = require('axios');

const data = {
  key: 'value'
};

axios.post('http://localhost:3000/api/data', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
