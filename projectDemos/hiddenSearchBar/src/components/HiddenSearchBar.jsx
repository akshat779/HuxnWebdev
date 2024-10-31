import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';

function HiddenSearchBar() {
    const [showInput, setShowInput] = useState(false);
    const [bgColor,setBgColor] = useState('white');
    const handleClick = (e) => {
        setBgColor('#1a1a1a')

        if(e.target.className === 'container'){
            setShowInput(false);
            setBgColor('#fff');
        }
    }

    return(
        <section className='container' style = {{backgroundColor:bgColor}} onClick={(e) => handleClick(e)}>
            {showInput ? (
                <input type="text" placeholder='Search..' />
            ) : (
                <FaSearch style = {{ color: "#000"}} onClick={() => setShowInput(true)} />
            )}
        </section>
    )
}


export default HiddenSearchBar;