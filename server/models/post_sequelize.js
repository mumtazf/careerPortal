import pool from '../config/database.js'

const findAll = () => {
  if (value) {
    const query = 'SELECT * FROM users WHERE  ORDER BY id ASC'
    return pool.query(query, [])
  }
  else {
    const query = 'SELECT * FROM users ORDER BY id ASC'
    return pool.query(query)
  }
}

const findOne = () => {
  const query = 'SELECT * FROM users WHERE '
  return pool.query(query, [])
}

const create = ( ) => {
  
    const query = 'INSERT INTO users ( githubId, username, avatarUrl, accessToken, savedJobs, Role, is_admin) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
    return pool.query(query, [ ])
  }
  
const update = () => {
    const query = 'UPDATE users SET githubId = $2, username = $3, avatarUrl = $4, accessToken = $5, savedJobs = $6, Role = $7, is_admin=$8  WHERE id = $1'
    return pool.query(query, [])
  }
  
const delete = () => {
    const query = 'DELETE FROM users WHERE '
    return pool.query(query, [])
  }
export default {
  findAll,
  findOne,
  create,
  update,
  delete
}