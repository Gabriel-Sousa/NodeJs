const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
];

const ask = (index) => {
    // console.log(index)
    process.stdout.write("\n" + questions[index] + " > ")
    return 
}

ask(0)

const answers =[]

process.stdin.on("data", data => {
    // process.stdout.write(data.toString().trim() + "\n")

    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`

    Eae, Gabriel!!!
    
    O que você aprendeu hoje:
    ${answers[0]}
    
    O que te deixou aborrecido? E o que você poderia fazer para melhorar:
    ${answers[1]}
    
    "O que te deixou feliz hoje?"
    ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje!!

    Volte amanhã para novas reflexões

    `)   
})