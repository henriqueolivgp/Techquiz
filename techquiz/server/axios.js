import axios from 'axios';

axios.get('http://localhost:1400/api/utilizadorc')
  .then((response) => {
    // handle the response data
    console.log(response.data);
  })
  .catch((error) => {
    // handle any errors
    console.error(error);
  });
