module.exports = (app) => {
    app.route("/").get(app.api.products.get).post(app.api.products.post)
}