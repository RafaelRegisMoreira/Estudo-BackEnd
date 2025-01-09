import { app } from './app.js' // const app =  require('./app.js')
import { sequelize } from './config/database.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.authenticate()
    .then(() => {
      console.log('Database connected!');
    })
    .catch(error => {
      console.error('Unable to connect to the database:', error);
    });
});
