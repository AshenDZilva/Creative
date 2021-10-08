import nc from 'next-connect';
import Select from '../../../../models/Select';
import db from '../../../../utils/db';
import { isAuth } from '../../../../utils/auth';

const handler = nc();

handler.get(async (req, res) => {
  handler.use(isAuth);
  await db.connect();
  const select = await Select.findById(req.query.id);
  await db.disconnect();
  res.send(select);
});

export default handler;
