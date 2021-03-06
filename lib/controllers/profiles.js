const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  const user = await ProfileService.create(req.body);
  res.send(user);
});
