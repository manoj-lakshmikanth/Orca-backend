const connection = require('../db/connection');

const nrcDetails = async (req, resp) => {
  console.log(req.body);
  try {
    let table = await connection();
    let response = await table.insertOne(req.body);
    resp.status(200).json({ msg: 'sent', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

const getDetails = async (req, resp) => {
  try {
    let table = await connection();
    let response = await table.find({}).toArray();
    resp.status(200).json({ msg: 'got', data: response });
  } catch (err) {
    resp.status(400).json({ msg: 'err' });
  }
};

module.exports = { nrcDetails, getDetails };
