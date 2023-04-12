const db = require('../config/mysql');


const home = (req, res) => {

    const sql = `SELECT * FROM mvc`
    db.query(sql, (err, data) => {
        if (err) {
            console.log('err in view');
            return false;
        }
        return res.render('home', { data })
    })

}

const insertDATA = (req, res) => {
    const { name, email, password } = req.body
    const sql = `INSERT INTO mvc( name, email, password) VALUES ('${name}','${email}','${password}')`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log('insert error');
            return false;
        }
        console.log('successfully inserted');
        return res.redirect('back')
    })
}

// const insertData =  (req, res) => {
//     try {

//         const { name, email, password } = req.body;
//         let sql = `INSERT INTO mvc(name,email,password) VALUES('${name}','${email}','${password}')`;
//         const add = db.query(sql, (err) => {
//             if (err) {
//                 console.log(err.message);
//                 return false;
//             }
//             return res.redirect("back");
//         });

//     } catch (error) {
//         console.log(error.message);
//         return false;
//     }
// }

const deleteDATA = (req, res) => {
    const id = req.params.id;
  console.log(id);
    const sql = `DELETE FROM mvc WHERE id=${id} `

    db.query(sql, (err) => {
        if (err) {
            console.log('err in deleting');
            return false;
        }
        console.log('delted');

        return res.redirect('back');

    })
}

const crad = (req,res)=>{
    res.render('newcard')
}
module.exports = { home, insertDATA, deleteDATA,}