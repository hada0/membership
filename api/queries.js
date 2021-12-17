const Pool = require('pg').Pool
const pool = new Pool({
  user: 'doadmin',
  host: 'db-postgresql-lon1-86841-do-user-10450856-0.b.db.ondigitalocean.com',
  database: 'defaultdb',
  password: 'vaCqndW46NiQSSP9',
  port: 25060,
  ssl: {
    rejectUnauthorized: false,
  },
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY fcid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserInfo = (request, response) => {
    const id = request.params.bfid;
    console.log(id)
    pool.query('SELECT * FROM users WHERE bfid = $1', [id], (error, results) => {
        if (error) {
            console.log("User not found. Please register.")
        }
        // Status 200: OK.
        response.status(200).json(results.rows)
    })
}

const registerUser = (request, response) => {
    console.log("lets go")
    const { bfid, firstname, lastname, email, mobile, pin} = request.body
    console.log(bfid, firstname, lastname)
    pool.query(
        'INSERT INTO users (bfid, firstname, lastname, email, mobile, pin) VALUES ($1, $2, $3, $4, $5, $6)',
        [bfid, firstname, lastname, email, mobile, pin],
        (error, results) => {
        if (error) {
            console.log(error)
        }
        // Status 201: request fulfilled and new resource created.
        console.log(results)
        response.status(201).send(`User added.`)
    })
 }
 
module.exports = {
    getUserInfo,
    getUsers,
    registerUser,
}