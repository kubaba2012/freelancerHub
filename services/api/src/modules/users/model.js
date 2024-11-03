const db = require('../../config/database');
const bcrypt = require('bcrypt');

class User {
  static async create({ email, password, fullName }) {
    const passwordHash = await bcrypt.hash(password, 10);
    
    const result = await db.query(`
      INSERT INTO users (email, password_hash, full_name)
      VALUES ($1, $2, $3)
      RETURNING id, email, full_name, role, created_at, updated_at
    `, [email, passwordHash, fullName]);
    
    return result.rows[0];
  }

  static async findByEmail(email) {
    const result = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0];
  }

  static async findById(id) {
    const result = await db.query(
      'SELECT id, email, full_name, role, created_at, updated_at FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }
}

module.exports = User; 