﻿module.exports = function (sequelize, DataTypes) {
    var EmployerDates = sequelize.define("EmployerDates", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        availability: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    },
        {
            // We're saying that we want our User to have EmployerTable
            classMethods: {
                associate: function (models) {
                    // An User (foreignKey) is required or an event can't be made
                    EmployerDates.belongsTo(models.User, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        });
    return EmployerDates;
};
