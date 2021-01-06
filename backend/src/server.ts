import express from 'express'
import './database/connection';

const app = express()

app.listen(3333, ()=> {
   console.log('Server is running on port 3333')
})