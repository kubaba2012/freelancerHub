const fs = require('fs');
const path = require('path');
const db = require('../database');

const runMigrations = async () => {
  try {
    // 创建 migrations 表（如果不存在）
    await db.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        executed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 读取所有 SQL 文件
    const migrationsDir = path.join(__dirname);
    const files = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort();

    // 获取已执行的迁移
    const { rows: executedMigrations } = await db.query(
      'SELECT name FROM migrations'
    );
    const executedNames = executedMigrations.map(m => m.name);

    // 执行新的迁移
    for (const file of files) {
      if (!executedNames.includes(file)) {
        const sql = fs.readFileSync(
          path.join(migrationsDir, file),
          'utf8'
        );
        
        console.log(`Running migration: ${file}`);
        await db.query(sql);
        
        await db.query(
          'INSERT INTO migrations (name) VALUES ($1)',
          [file]
        );
        
        console.log(`Completed migration: ${file}`);
      }
    }

    console.log('All migrations completed successfully');
  } catch (err) {
    console.error('Migration failed:', err);
    throw err;
  }
};

module.exports = { runMigrations }; 