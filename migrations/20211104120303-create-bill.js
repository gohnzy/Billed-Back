'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Bills', {
			id: {
				allowNull: false,
				SERIAL: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			key: {
				type: Sequelize.STRING,
			},
			vat: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.STRING,
			},
			type: {
				type: Sequelize.STRING,
			},
			commentary: {
				type: Sequelize.STRING,
			},
			name: {
				type: Sequelize.STRING,
			},
			fileName: {
				type: Sequelize.STRING,
			},
			filePath: {
				type: Sequelize.STRING,
			},
			date: {
				type: Sequelize.STRING,
			},
			amount: {
				type: Sequelize.NUMERIC,
			},
			commentAdmin: {
				type: Sequelize.STRING,
			},
			pct: {
				type: Sequelize.NUMERIC,
			},
			email: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Bills');
	},
};
