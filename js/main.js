document.querySelector('button').addEventListener('click', generateName)

function generateName() {
    const answerOne = Number(document.querySelector('#wuTangMember').value)
    const answerTwo = Number(document.querySelector('#album').value)
    const answerThree = Number(document.querySelector('#why').value)
    const answerFour = Number(document.querySelector('#acting').value)
    const answerFive = Number(document.querySelector('#soloAlbum').value)


    console.log(answerOne, answerTwo, answerThree, answerFour, answerFive)
    let FirstNameFormula = answerOne + answerTwo
    let LastNameFormula = answerThree + answerFour + answerFive
    let FirstNameArr = [
        'sorrowful',
        'gluttonous',
        'baby',
        'young',
        'menace',
        'babyface',
        'dirty',
        'purples'
    ]

    let LastNameArr = [
        '$lim',
        'II',
        'smallz',
        'LIAH',
        'dragon',
        'thug',
        'pop'
    ]

    let FirstName = FirstNameArr[FirstNameFormula]
    let LastName = LastNameArr[LastNameFormula]


    document.querySelector("#name").innerText = `${FirstName}  ${LastName}`

}
