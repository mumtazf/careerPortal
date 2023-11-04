import pool from '../config/database.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const userdata = fs.readFileSync(path.resolve(__dirname, 'users.json'), 'utf8');
const createUsersTable = async () => {
  try {
    const createTableQuery = `
      DROP TABLE IF EXISTS users;
      CREATE TABLE IF NOT EXISTS users (
        
      )
    `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const insertUsers = async () => {
  try {
    const insertQuery = `
      INSERT INTO users ( )
      VALUES ($1, $2, $3, $4, $5, )
    `

    const users = JSON.parse(userdata)

    for (let user of users) {
      const values = [
        
        user.githubId,
        user.username, 
        user.avatarUrl, 
        user.accessToken, 
        user.savedJobs, 
        user.Role, 
        user.is_admin
      ]
      
      await pool.query(insertQuery, values)
      console.log(`✅ added ${user.username}`)
    }
  } catch (error) {
    console.log(error)
  }
}
//create company table
const createCompanyTable = async () => {
  try {
    const createTableQuery = `
      DROP TABLE IF EXISTS company;
      CREATE TABLE IF NOT EXISTS company (
        
        )
    `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const insertCompany = async () => {
  try {
    const insertQuery = `
      INSERT INTO user ( )
      VALUES ($1, $2, $3, $4)
    `

    const companys = JSON.parse(companydata)

    for (let company of companys) {
      const values = [
        
        company.githubId,
        company.name, 
        company.description, 
        company.picture_url
      ]
      
      await pool.query(insertQuery, values)
      console.log(`✅ added ${company.name}`)
    }
  } catch (error) {
    console.log(error)
  }}
//posts
const createPostsTable = async () => {
  try {
    const createTableQuery = `
      DROP TABLE IF EXISTS post;
      CREATE TABLE IF NOT EXISTS post (
        
      )
    `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const insertPosts = async () => {
  try {
    const insertQuery = `
      INSERT INTO user ()
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `

    const posts = JSON.parse(postdata)

    for (let post of posts) {
      const values = [
        
        post.githubId,
        post.title, 
        post.body, 
        post.likes, 
        post.pending
        
      ]
      
      await pool.query(insertQuery, values)
      console.log(`✅ added ${post.title}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const setup = async () => {
  //await dropAllTables()
   createUsersTable()
  await insertUsers()
  await createCompanyTable()
  await insertCompany()
  await createPostsTable()
  await insertPosts()

}

export default setup