const express = require('express');
const db = require('./config/database');
const { runMigrations } = require('./config/migrations');
const userRoutes = require('./modules/users/routes');

const app = express();

app.use(express.json());

// 运行迁移
runMigrations().catch(console.error);

// 注册用户路由
app.use('/api/users', userRoutes);

// 测试数据库连接的端点
app.get('/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({
      message: 'Database connection successful',
      time: result.rows[0].now
    });
  } catch (err) {
    res.status(500).json({
      message: 'Database connection error',
      error: err.message
    });
  }
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint works!' });
});

app.get('/', (req, res) => {
  res.json({
    message: 'FreelanceHub API is running',
    version: '1.0.0',
    time: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
});

// 添加一个测试用户表的端点
app.get('/users/test', async (req, res) => {
  try {
    const result = await db.query(`
      INSERT INTO users (email, password_hash, full_name)
      VALUES ($1, $2, $3)
      RETURNING *
    `, ['test@example.com', 'dummy_hash', 'Test User']);
    
    res.json({
      message: 'Test user created',
      user: result.rows[0]
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error creating test user',
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} - ${new Date().toISOString()}`);
});
