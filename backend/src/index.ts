import dotenv from 'dotenv'
import app from './app.js'

dotenv.config(); 

const start = async () => {
    const port = process.env.PORT || '8000'; 

    app.listen(port, () => {
        console.log(`App is listening on http://localhost:${process.env.PORT!}`)
    })
}

start().catch((err) => {
    console.log("Error in starting server")
} )
