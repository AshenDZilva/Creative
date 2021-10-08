import nc from 'next-connect';
import Select from '../../../../models/Select';
import db from '../../../../utils/db';
import { isAuth } from '../../../../utils/auth';

const handler = nc();
handler.use(isAuth);
handler.get(async (req, res) => {
  await db.connect();
  const select = await Select.findById(req.query.id);
  await db.disconnect();
  res.send(select);
});

export default handler;
