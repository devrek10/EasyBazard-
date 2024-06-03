import mongoose from 'mongoose'

const dataBaseConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connect succesfuly databse👍')
    } catch (error) {
        console.log(`error to connect ${error.message}`)
        process.exit(1)
    }
}
export default dataBaseConnect