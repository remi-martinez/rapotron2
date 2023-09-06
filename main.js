import './styles.css'
import { setup } from './rhymes.js'

document.querySelector('#app').innerHTML = `
<div class="container">

    <div class="center">
        <img class="rapotron-img" src="img/rapotron.png" alt="Rapotron">
        <div id='punchline'>
            <blockquote>Clique sur générer !</blockquote>
        </div>
        <div id='authors'></div>

        <div class='selection-container'>
            <div class="leftchoice">
                <img id="lDamso" src="img/damso.png" class="selected" title="Damso" alt="Damso">
                <img id="lOrelsan" src="img/orelsan.png" title="Orelsan" alt="Orelsan">
                <img id="lNekfeu" src="img/nekfeu.png" title="Nekfeu" alt="Nekfeu">
            </div>
            <button class="btn">Générer</button>
            <div class="rightchoice">
                <img id="rDamso" class="imgflip" src="img/damso.png" title="Damso" alt="Damso">
                <img id="rOrelsan" class="imgflip selected" src="img/orelsan.png" title="Damso" alt="Damso">
                <img id="rNekfeu" class="imgflip" src="img/nekfeu.png" title="Damso" alt="Damso">
            </div>
        </div>
    </div>
</div>
`

setup();