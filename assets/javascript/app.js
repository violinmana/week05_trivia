$(document).ready(function () {

    //Functions

    //Initialization Function
    var createStart = function () {
        $('#triviaGame').append(`<h1 class='display-2'>Trivia Game`)
        $('#triviaGame').append(`<button id='start' class='btn btn-primary btn-lg'>Start`)
    }

    //Timer Function
    var countSec = function () {
        timerRunning = true
        intervalSec = setInterval(count, 1000)
    }

    var count = function () {
        secondsLeft--

        $('#countDown').text(`00:0` + secondsLeft)

        if (secondsLeft === 0 && questionBool === true) {
            timerRunning = false
            clearInterval(intervalSec)
            nextPage()
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

        for (var i = 0; i < Object.values(questionObj[questionNum])[2].length; i++) {
            $('#triviaGame').append(`<button id='poss${i}' class='btn btn-primary btn-lg'>${Object.values(questionObj[questionNum])[2][i]}`)
        }

        questionNum++

        countSec()
    }

    var nextPage = function () {
        $('#triviaGame').empty()

        questionBool = false
        secondsLeft = 3
        $('#triviaGame').append(`<div id='countDown' class='display-2'>00:03`)

        countSec()
    }



    //Global Variables

    var intervalSec
    var secondsLeft
    var timerRunning = false
    var questionBool = false

    var questionNum = 0

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

    for (var i = 0; i < questionObj.length; i++) {
        console.log(questionObj[i])
        console.log(Object.values(questionObj[i])[0])
        console.log(Object.values(questionObj[i])[2][0])
    }

    if (Object.values(questionObj[0])[1] === Object.values(questionObj[0])[2][0]) {
        console.log('True')
    }






    //Timer

    //    for (var key in questionObj) {
    //        if (questionObj.hasOwnProperty(key)) {
    //            console.log(key + " - " + questionObj[key])
    //        }
    //    }





    //Initialation

    createStart()

    $('#start').on('click', function () {
        questionPage()

        //When User Clicks Button



    })












})