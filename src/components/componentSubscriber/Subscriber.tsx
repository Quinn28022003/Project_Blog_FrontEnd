import { ChangeEvent, useContext, useState } from 'react';
import { TContextApp, contextApp } from '../../App';
import './Subscriber.scss';
import postAddEmailUser from '../../axios/postAddEmailUser';
import { ToastContainer, toast } from 'react-toastify';

const Subscriber = () => {
    const dataContextApp = useContext<TContextApp>(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [email, setEmail] = useState<string>('');

    const handleOnchageInputEmailUser = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const handleOnclickPostAddEmailUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const deleteSpaceEmail: string = email.trim();
        const trimmedEmail: string = deleteSpaceEmail.slice(-10);
        if (trimmedEmail === '@gmail.com') {
            const dataBlogPost: any = await postAddEmailUser(email);
            if (dataBlogPost.errorCode === 0) {
                toast.success(dataBlogPost.message);
                setEmail('');
            } else {
                toast.error(dataBlogPost.message);
            };
        } else {
            toast.error('Your email is not in the correct format!');
        };

    };

    return (
        <>
            <div className='subscriber'>
                <ToastContainer />
                <h3 className='subscriber_titleOne'>Newlatters</h3>
                <h3 className={`subscriber_titleTwo ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>Stories and interviews</h3>
                <p className={`subscriber_text ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
                <form className='subscriber_form'>
                    <input type="text" placeholder='Enter your email' className='subscriber_form_inputEmail' value={email} onChange={handleOnchageInputEmailUser} />
                    <button type='submit' className='subscriber_form_btn' onClick={handleOnclickPostAddEmailUser}>Subscriber</button>
                    <p className={`subscriber_form_text ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>We care about your data in our <a href="">privacy policy</a></p>
                </form>
            </div>
        </>
    );
};

export default Subscriber;