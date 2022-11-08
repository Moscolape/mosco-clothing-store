import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import './sign-in-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    // const {setCurrentUser} = useContext(UserContext);

    const resetFormfields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormfields();

        } catch (err) {
            switch(err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert("There's no user associated with this email");
                    break;
                default:
                    console.log(err);
            }
        }
    };


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <section className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                 label= "Email"
                 type='email'
                 required
                 onChange={handleChange}
                 name="email"
                 value={email}
                />

                <FormInput
                 label= 'Password'
                 type='password'
                 required
                 onChange={handleChange}
                 name="password"
                 value={password}
                />
                <div className="button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
                </div>
            </form>
        </section>
    )
}

export default SignInForm;