const book = (sequelize, DataTypes) => {

    const books = sequelize.define("books", {

        author: {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        category: {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        description: {
            "type": DataTypes.STRING,
            "allowNull": false
        },
        isbn: {
            "type": DataTypes.STRING,
            "allowNull": false,
            "unique": true
        },
        title: {
            "type": DataTypes.STRING,
            "allowNull": false,


        },
        quantity: {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        year: {
            "type": DataTypes.INTEGER,
            "allowNull": false
        },
        image: {
            "allowNull": true,
            "type": DataTypes.STRING

        }
    }, {
        classMethods: {
            associate (models) {
                books.belongTo(model.borrowedbooks, {
                    foreignKey: 'bookId',
                    as: 'borrowed '
                });
            }
        }
    });

    return books;

};

export default book;
