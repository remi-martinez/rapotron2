export const setup = () => {
    const leftChoiceImages = document.querySelectorAll('.leftchoice img');
    const rightChoiceImages = document.querySelectorAll('.rightchoice img');
    const generateButton = document.querySelector('button.btn');
    
    leftChoiceImages.forEach(function(img) {
        img.addEventListener('click', function() {
            leftChoiceImages.forEach(function(img) {
                img.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });

    rightChoiceImages.forEach(function(img) {
        img.addEventListener('click', function() {
            rightChoiceImages.forEach(function(img) {
                img.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });

    generateButton.addEventListener('click', function() {
        refreshPunchline();
    });
}

const refreshPunchline = (rapperLeft = "Orelsan", rapperRight = "Damso") => {
    const selectedLeftChoice = document.querySelector('.leftchoice .selected');
    const selectedRightChoice = document.querySelector('.rightchoice .selected');
    const punchlineElement = document.querySelector('#punchline');
    const authorsElement = document.querySelector('#authors');

    if (selectedLeftChoice) {
        rapperLeft = selectedLeftChoice.id.substring(1).toLowerCase();
    }

    if (selectedRightChoice) {
        rapperRight = selectedRightChoice.id.substring(1).toLowerCase();
    }
    
    const RHYMES = ['a', 'ai', 'an', 'i', 'o', 'ou'];
    const randomRhyme =  RHYMES[Math.floor(Math.random() * RHYMES.length)];


    fetch("rhymes.json")
        .then(Response => Response.json())
        .then(data => {
            
            const allLefts = data[rapperLeft]["left"][randomRhyme];
            const allRights = data[rapperRight]["right"][randomRhyme];
            
            const left = allLefts[Math.floor(Math.random() * allLefts.length)];
            const right = allRights[Math.floor(Math.random() * allRights.length)];
            
            punchlineElement.textContent = `"${left}, ${right}"`;
            authorsElement.textContent = `${rapperLeft} & ${rapperRight}`.toUpperCase();
            
        })
    

}

export function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
        counter = count
        element.innerHTML = `count sis ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}
