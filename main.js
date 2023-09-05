import './styles.css'
import { setup } from './rhymes.js'

document.querySelector('#app').innerHTML = `
<div class="container">
    <div class="center">
        <div id='punchline'>
            <blockquote>Clique sur générer !</blockquote>
        </div>
        <div id='authors'></div>

        <div id='generate_button'>
            <div class="leftchoice">
                <img id="lDamso" src="img/damso.png" class="selected">
                <img id="lOrelsan" src="img/orelsan.png">
                <img id="lNekfeu" src="img/nekfeu.png" style="width:100px">
            </div>
            <button class="btn">Générer</button>
            <div class="rightchoice">
                <img id="rDamso" class="imgflip" src="img/damso.png">
                <img id="rOrelsan" class="imgflip selected" src="img/orelsan.png">
                <img id="rNekfeu" class="imgflip" src="img/nekfeu.png" style="width:100px">
            </div>
        </div>
    </div>
</div>
`

setup();