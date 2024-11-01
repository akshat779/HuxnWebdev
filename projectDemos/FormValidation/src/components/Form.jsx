import {useState} from 'react'

function Form(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState(""); 
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validate = (e) =>{
        e.preventDefault();
        if(userName.length > 8){
            setUserNameError("");
            setUserColor('green');
        }
        else{
            setUserNameError("Name must be atleast 8 characters long");
            setUserColor('red');
        }
        if(email.includes('@')){
            setEmailError("");
            setEmailColor('green');
        }
        else{
            setEmailError("Email must contain @");
            setEmailColor('red');
        }
        if(password.length > 8){
            setPasswordError("");
            setPasswordColor('green');
        }
        else{
            setPasswordError("Password must be atleast 8 characters long");
            setPasswordColor('red');
        }
        if(confirmPassword === password){
            setConfirmPasswordError("");
            setConfirmPasswordColor('green');
        }
        else{
            setConfirmPasswordError("Passwords do not match");
            setConfirmPasswordColor('red');
        }
    }

    return(
       <div className="card">
        <div className="card-image">
        </div>
            <form>
                <input type="text" placeholder='Name' style = {{borderColor : userColor}} value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <p className='error'>{userNameError}</p>
                <input type="text" placeholder='Email' value={email} style={{borderColor:emailColor}} onChange={(e) => setEmail(e.target.value)}/>
                <p className='error'>{emailError}</p>
                <input type="password" placeholder='Password' value={password} style={{borderColor:passwordColor}} onChange={(e) => setPassword(e.target.value)}/>
                <p className='error'>{passwordError}</p>
                <input type="password" placeholder='Confirm Password' value={confirmPassword} style={{borderColor:confirmPasswordColor}} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <p className='error'>{confirmPasswordError}</p>

                <button className='submit-btn' onClick={validate}>Submit</button>

            </form>
        
       </div>
    )
}

export default Form;