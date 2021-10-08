import nc from 'next-connect';
import Example from '../../../models/Example';
import db from '../../../utils/db';
import data from '../../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Example.deleteMany();
  await Example.insertMany(data.example);

  await db.disconnect();
  res.send({ message: 'seed success' });
});

export default handler;
