import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db';
import data from '../../utils/data';
import Example from '../../models/Example';
import User from '../../models/User';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.user);
  await Example.deleteMany();
  await Example.insertMany(data.example);
  await Product.deleteMany();
  await Product.insertMany(data.product);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
