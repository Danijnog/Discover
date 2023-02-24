//process.stdout.write('Alguma coisa \n\n');
function bestME() {
    const questions = [
        'O que aprendi hoje?',
        'O que eu posso fazer de melhor hoje?',
        'O que me deixou feliz hoje?',
        'Eu dei o meu melhor hoje em tudo que fiz dentro do possivel?'
    ]
    const ask = (index) => {
        process.stdout.write(questions[index] + " >");
    }
    ask(0);

    const answers = [];
    process.stdin.on("data", data => { //o processo vai ficar on e esperar dados q o usuario inserir no terminal
        answers.push(data.toString().trim()); //pega oq o usuario digitar e coloca no vetor de answers
        if(answers.length >= questions.length)
        {
            process.exit();
        }
        else
            ask(answers.length);
    })

    process.on('exit', () => { //o processo vai ficar ouvindo o evento exit, se tiver o evento exit acontece o seguinte log abaix
        console.log(`
        ---Olá Daniel!,
        ---O que aprendi hoje? ${answers[0]}
        ---O que eu posso fazer de melhor hoje? ${answers[1]}
        ---O que me deixou feliz hoje? ${answers[2]}
        ---Eu dei o meu melhor hoje em tudo que fiz dentro do possivel? ${answers[3]}`);
    })
}
bestME();