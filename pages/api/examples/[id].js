import nc from 'next-connect';
import Example from '../../../models/Example';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const example = await Example.findById(req.query.id);
  await db.disconnect();
  res.send(example);
});

export default handler;
