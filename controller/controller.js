const movieDB = require("../models/movie.Schema")
const fs = require('fs')
const moviePage = async (req, res) => {
    try {
        const data = await movieDB.find({})
        return res.render('movie', { data })
    } catch (err) {
        console.log(err);
    }
}
const addPage = async (req, res) => {
    return res.render('addMovie')
}
const addMovie = async (req, res) => {
    const { name, rating, dsc, image, id } = req.body
    if (id) {
        if (req.file) {
            let image = req.file.path
            try {
                const data = await movieDB.findByIdAndUpdate(id, { name, rating, image, dsc })
                let oldImg = data.image
                fs.unlinkSync(oldImg)
                return res.redirect('/')
            } catch (err) {
                console.log(err);
            }

        } else {
            try {
                const data = await movieDB.findByIdAndUpdate(id, { name, rating, dsc, image })
                return res.redirect('/')
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        let image = req.file.path
        try {
            const data = await movieDB.create({ name, image, rating, dsc })
            return res.redirect('/')
        } catch (err) {
            console.log(err);
        }
    }
}
const editPage = async (req, res) => {
    const { id } = req.params
    try {
        const data = await movieDB.findById(id)
        return res.render('editMovie', { data })
    } catch (err) {
        console.log(err);
    }
}
const deletMovie = async (req, res) => {
    const { id } = req.params
    try {
        const data = await movieDB.findByIdAndDelete(id)
        let image = data.image
        fs.unlinkSync(image)
        return res.redirect('back')
    } catch (err) {
        console.log(err);
    }
}

module.exports = { moviePage, addPage, editPage, addMovie, deletMovie }
