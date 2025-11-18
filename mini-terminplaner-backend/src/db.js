import mongoose from 'mongoose';
import chalk from 'chalk';

export const connect = async (uri) => {
  await mongoose.connect(uri);
  console.log(chalk.bgCyan("MongoDB erfolgreich verbunden"));
};
