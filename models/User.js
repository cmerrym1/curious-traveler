const { Model, DataTypes, STRING } = require('sequelize');

const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {}






// define table columns and configuration
// create the User class with the .init() method
User.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        username:   {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:  {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:   {
                isEmail: true
            }
        },
            password:   {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        } 
    },        
    {
    hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10).then(newUserData => {
                return newUserData
            });
        },
        // set up beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10).then(updatedUserData => {
                return updatedUserData
            });
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }
);

// export this model so it can be used in other parts of the app
module.exports = User;