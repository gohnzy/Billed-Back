require('dotenv').config({
	path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});

module.exports = {
	development: {
		username: process.env.DB_USERNAME || 'postgres',
		password: process.env.DB_PASSWORD || 'password',
		database: process.env.DB_NAME || 'my_database',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'postgres',
	},
	test: {
		username: process.env.DB_USERNAME || 'postgres',
		password: process.env.DB_PASSWORD || 'password',
		database: process.env.DB_NAME_TEST || 'test_database',
		host: process.env.DB_HOST || '127.0.0.1',
		dialect: 'postgres',
	},
	production: {
		username: process.env.DB_USERNAME || 'postgres',
		password: process.env.DB_PASSWORD || 'HKJ7z2d8bRh!she',
		database: process.env.DB_NAME || 'postgres',
		host: process.env.DB_HOST || 'db.ierbsrtaoqofyvormvqr.supabase.co',
		dialect: 'postgres',
	},
};
