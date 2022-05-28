import express  from "express";

const app = express()

app.get("/", (request, response) => {

    response.json({
        mensage: "Hi :)"
    })
})


app.listen(3333, () => console.log('server is running'));