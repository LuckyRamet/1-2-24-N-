const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('1234')
const userData = [
    {username : 'andy', password, email: 'andy@ggg.mail'},
    {username : 'bobby', password, email: 'bobby@ggg.mail'},
    {username : 'candy', password, email: 'candy@ggg.mail'},
]   

const todoDataa =[
    { title: 'Learn HTML', duedate: new Date(), userId: 1 },
    { title: 'Learn HTML', duedate: new Date(), userId: 1 },
    { title: 'Learn HTML', duedate: new Date(), userId: 2 },
    { title: 'Learn HTML', duedate: new Date(), userId: 3 },

]
const run = async () => {
    // await prisma.user.deleteMany({ data : userData})
    // await prisma.user.deleteMany
   

    await prisma.user.createMany({ 
        data : userData
    })
    
    await prisma.todo.createMany({
        data : todoDataa
    })
    
}
run()