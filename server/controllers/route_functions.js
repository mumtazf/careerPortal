import users_sequelize from '../models/users_sequelize.js'
import post_sequelize from '../models/post_sequelize.js'
import company_sequelize from '../models/company_sequelize.js'

// get all video games from the database
const getUsers = async (req, res) => {
  try {
    
    const results = await users_sequelize.findAll()
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get video games by ID from the database
const getUserByConstraint = async (req, res) => {
  try {
   
    const results = await users_sequelize.findOne(e)
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// create new blog post
const getUsers = async (req, res) => {
    try {
      
      const results = await users_sequelize.findAll()
      res.status(200).json(results.rows)
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  // get video games by ID from the database
  const getUserByConstraint = async (req, res) => {
    try {
     
      const results = await users_sequelize.findOne(e)
      res.status(200).json(results.rows[0])
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  const delete = async (req, res) => {
    try {
      
      const results = await users_sequelize.delete()
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }
  //now for company

  const getUsers = async (req, res) => {
    try {
      
      const results = await users_sequelize.findAll()
      res.status(200).json(results.rows)
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  // get video games by ID from the database
  const getUserByConstraint = async (req, res) => {
    try {
     
      const results = await users_sequelize.findOne(e)
      res.status(200).json(results.rows[0])
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
// now for posts
const getPost = async (req, res) => {
    try {
      
      const results = await post_sequelize.findAll( )
      res.status(200).json(results.rows)
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  // get video games by ID from the database
  const getPostByConstraint = async (req, res) => {
    try {
      
      const results = await post_sequelize.findOne()
      res.status(200).json(results.rows[0])
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  // create new blog post
  


export default {
  


}