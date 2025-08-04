import './style.css';
import siteLogo from './logo.svg';

const name = 'Aleksa';
const paragraphColor = 'purple';

let date = new Date();
let currentHours = date.getHours();
console.log(currentHours);

const isNight = currentHours >= 20 || currentHours <= 7;

function App(){

    const mainDivStyle = {
        backgroundColor: isNight ? 'darkblue' : 'white',
    }

    return (
        <div className='mainDiv' style={mainDivStyle}>
            <p className='paragraph'>Pozdrav ja se zovem { name }</p>
            <img src={ siteLogo } alt=""/>
            <p style={{ color: paragraphColor}}>Ovo je moj prvi React App</p>
        </div>
    );
}

export default App;