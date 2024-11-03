const express = require('express');
const UserController = require('./controller');
const { auth } = require('./middleware');

const router = express.Router();

// 公开路由
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// 需要认证的路由
router.get('/me', auth, async (req, res) => {
  res.json(req.user);
});

router.put('/me', auth, async (req, res) => {
  try {
    const { fullName } = req.body;
    const result = await db.query(
      'UPDATE users SET full_name = $1 WHERE id = $2 RETURNING id, email, full_name, role',
      [fullName, req.user.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 