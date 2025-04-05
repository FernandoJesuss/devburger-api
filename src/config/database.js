module.exports = {
    dialect: "postgres",
    host: "localhost",
    port: 5332,
    username: "postgres",
    password: "postgres",
    database: "devburger",
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};