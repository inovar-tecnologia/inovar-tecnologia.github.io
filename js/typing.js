//https://safi.me.uk/typewriterjs/

let app = document.getElementById('typingElement');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Inovação')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Tecnologia')
    .pauseFor(2500)
    .deleteAll()
    .typeString(`Venha para a nuvem!`)
    .pauseFor(2500)
    .start();