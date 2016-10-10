import json from './env.json';
import jsonProd from './env.prod.json';

const env = () => {
  if (process.env.NODE_ENV === 'development') {
    return jsonProd;
  }
  return json;
};
export default env();
