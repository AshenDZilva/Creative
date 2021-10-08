import nc from 'next-connect';
import Select from '../../../models/Select';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';
import { onError } from '../../../utils/error';

const handler = nc({
  onError,
});
handler.use(isAuth);

handler.post(async (req, res) => {
  await db.connect();
  const newSelect = new Select({
    ...req.body,
    user: req.user._id,
  });
  const select = await newSelect.save();
  res.status(201).send(select);
});

export default handler;
