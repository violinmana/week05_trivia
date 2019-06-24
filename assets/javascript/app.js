$(document).ready(function () {

    //Functions
    //Initialization Function
    var createStart = function () {
        $('#triviaGame').append(`<h1 class='display-2'>Trivia Game`)
        $('#triviaGame').append(`<button id='start' class='btn btn-primary btn-lg'>Start`)
    }

    //Timer Function
    var countSec = function () {

        if (questionNum === questionObj.length) {
            endPage()
        } else {
            timerRunning = true
            intervalSec = setInterval(count, 1000)
        }
    }

    var count = function () {
        secondsLeft--

        $('#countDown').text(`00:0` + secondsLeft)

        if (secondsLeft === 0 && questionBool === true) {
            timerRunning = false
            clearInterval(intervalSec)
            nextPageNoAns()
            console.log('timeoutpage')
        } else if (secondsLeft === 0 && questionBool === false) {
            timerRunning = false
            clearInterval(intervalSec)
            questionPage()
            console.log('next question')
        }
    }

    var questionPage = function () {
        $('#triviaGame').empty()

        questionBool = true
        secondsLeft = 10
        $('#triviaGame').append(`<div id='countDown' class='display-2'>00:10`)

        console.log(Object.values(questionObj[questionNum].answer))

        $('#triviaGame').append(`<div class='display-2'>${Object.values(questionObj)[questionNum].question}`)

        for (var i = 0; i < Object.values(questionObj[questionNum])[2].length; i++) {
            $('#triviaGame').append(`<button val='${i}' class='btn btn-primary btn-lg ansBtn'>${Object.values(questionObj[questionNum])[2][i]}`)
        }

        countSec()
    }

    var nextPageAns = function () {
        $('#triviaGame').empty()
        questionBool = false
        secondsLeft = 3
        $('#triviaGame').append(`<div id='countDown' class='display-2'>00:03`)

        if (ansBtnVal === Object.values(questionObj[questionNum].answer)) {
            $('#triviaGame').append(`<div class='display-2'>You got it right!`)
            numCorrect++
        } else {
            $('#triviaGame').append(`<div class='display-2'>You got it wrong.`)
            numWrong++
        }

        $('#triviaGame').append(`<div class='display-2'>Correct Answers = ${numCorrect}`)

        $('#triviaGame').append(`<div class='display-2'>Wrong Answers = ${numWrong}`)

        questionNum++
        countSec()
    }

    var nextPageNoAns = function () {
        $('#triviaGame').empty()
        questionBool = false
        secondsLeft = 3
        $('#triviaGame').append(`<div id='countDown' class='display-2'>00:03`)
        $('#triviaGame').append(`<div class='display-2'>You timed out and therefore wrong.`)
        numWrong++

        $('#triviaGame').append(`<div class='display-2'>Correct Answers = ${numCorrect}`)
        $('#triviaGame').append(`<div class='display-2'>Wrong Answers = ${numWrong}`)

        questionNum++
        countSec()
    }

    var endPage = function() {

        $('#triviaGame').append(`<div class='display-2'>You have reached the end. Your results are as follows:`)

        $('#triviaGame').append(`<div class='display-2'>Correct Answers = ${numCorrect}`)
        $('#triviaGame').append(`<div class='display-2'>Wrong Answers = ${numWrong}`)
    }

    //Global Variables
    var intervalSec
    var secondsLeft
    var timerRunning = false
    var questionBool = false

    var questionNum = 0

    var ansBtnVal = ''

    var numCorrect = 0
    var numWrong = 0

    //Questions and Answers
    var questionObj = [{
            question: 'Question 1',
            answer: 'Answer 1',
            possible: ['Answer 1', 'Answer 2', 'Answer 3']
        },
        {
            question: 'Question 2',
            answer: 'Answer 1',
            possible: ['Answer 4', 'Answer 5', 'Answer 6']
        },
        {
            question: 'Question 3',
            answer: 'Answer 1',
            possible: ['Answer 7', 'Answer 8', 'Answer 9']
        }
    ]

    //Initialation
    createStart()

    //On Start Click
    $('#start').on('click', function () {
        questionPage()
    })

    //On Answer Button CLick
    $(document.body).on('click', '.ansBtn', function () {
        ansBtnVal = $(this).val()
        nextPageAns()
    })

})