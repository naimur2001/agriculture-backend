require('dotenv').config()
const express =require('express')
const app=express()
const Pool=require('pg').Pool
const cors=require('cors')
const port=process.env.PORT || 5000


