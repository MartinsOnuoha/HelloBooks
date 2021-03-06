const borrowedbook = (sequelize, DataTypes) => {
    const borrowedbooks = sequelize.define('borrowedbooks', {

        userid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },

        bookid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'books',
                key: 'id'
            }
        },
        dateborrowed: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Date.now()
        },
        returndate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: Date.now()
        },
        returnstatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    }, {
        classMethods: {
            associate: (models) => {
                borrowedbooks.belongTo(models.users, {
                    foreignKey: 'userid', as: 'user'});
                borrowedbooks.belongTo(models.books, {
                    foreignKey: 'bookid', as: 'book'});
            }
        }
    });

    return borrowedbooks;
};

export default borrowedbook;
