const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
	'postgres://postgres:HKJ7z2d8bRh!she@db.ierbsrtaoqofyvormvqr.supabase.co:5432/postgres', // Remplace <password> par ton mot de passe
	{
		dialect: 'postgres',
		logging: false, // Pour désactiver les logs SQL si nécessaire
	},
);

const Bill = sequelize.define(
	'Bill',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		key: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		vat: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		commentary: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		fileName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		filePath: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		date: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		amount: {
			type: DataTypes.NUMERIC,
			allowNull: true,
		},
		commentAdmin: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		pct: {
			type: DataTypes.NUMERIC,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tableName: 'bills',
		timestamps: false,
	},
);

async function addBill() {
	try {
		// Ajouter une nouvelle facture
		const newBill = await Bill.create({
			vat: '20',
			status: 'accepted',
			type: 'Hôtel et logement',
			commentary: '',
			name: 'Hotel Bill',
			fileName: 'bill.jpg',
			filePath: 'path/to/file',
			date: '2024-01-01',
			amount: 100,
			commentAdmin: '',
			pct: 10,
			email: 'employee@test.tld',
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		console.log('Facture ajoutée avec succès:', newBill.toJSON());
	} catch (error) {
		console.error("Erreur lors de l'ajout de la facture:", error);
	}
}

// Ajouter une facture
addBill();
