const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const app = express ()

app.set("view engine", "hbs")
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

let compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get("/", (req, res) => {

  let compliment = (`Hey WDI,  ${(compliments[Math.floor(Math.random() * compliments.length)])}`)
  let color = colors[Math.floor(Math.random() * colors.length)]

  res.render("index", {
    compliment: compliment,
    color: color
  })
})

app.get("/:name?", (req, res) => {

  let compliment = (`Hey ${req.params.name},  ${(compliments[Math.floor(Math.random() * compliments.length)])}`)
  let color = colors[Math.floor(Math.random() * colors.length)]

  res.render("index", {
    compliment: compliment,
    color: color
  })
})

app.post('/', (req, res, next) => {
  console.log(req.body)
  compliments.push(req.body.user_compliment)
  res.redirect('back')
})
