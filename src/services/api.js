import axios from 'axios';

 const api = axios.create ({
   baseURL: "https://dhodonto.ctd.academy/swagger-ui/index.html"
})

export default api;


