const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'firstcateringltd',
  password: 'password',
  port: 5432,
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
    const { bfid, firstname, lastname, email, mobile, pin} = request.body
    pool.query('INSERT INTO users (bfid, firstname, lastname, email, mobile, pin)'
    + 'VALUES ($1, $2, $3, $4, $5, $6', [bfid, firstname, lastname, email, mobile, pin],
     (error, results) => {
        if (error) {
            throw error
        }
        // Status 201: request fulfilled and new resource created.
        response.status(201).send(`User added with ID: ${result.bfid}`)
    })
}



module.exports = {
    getUserInfo,
    getUsers,
}