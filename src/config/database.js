const mysql = require('mysql');
const { promisify } = require('util');

// Configuração do pool de conexões MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'api_p2',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

// Promisify para usar async/await
pool.query = promisify(pool.query);

// Testar conexão
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        console.log('💡 Make sure to configure your .env file with database credentials');
    } else {
        console.log('✅ Database connected successfully');
        connection.release();
    }
});

// Função para criar tabela de usuários se não existir
const initDatabase = async () => {
    try {
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;

        await pool.query(createTableQuery);
        console.log('✅ Users table ready');
    } catch (error) {
        console.error('❌ Error initializing database:', error.message);
    }
};

// Inicializar banco ao carregar o módulo
initDatabase();

module.exports = pool;
