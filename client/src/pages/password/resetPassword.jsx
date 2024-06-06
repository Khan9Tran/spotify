
import Logo from "../../components/logoAndText"
import Input from "../../components/input";
import { BasicFooter } from "../../components/footer";
import { useState } from "react";
export const NewPassword = () => {
    
    const [inputError, setInputError] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const handleInputError = (error) => {
    setInputError(error);
    };

    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    };

    return (
        <div className="wrapper bg-black-secondary w-screen min-h-screen flex flex-col overflow-y-auto items-center ">
            <div className="wrapper--header w-full h-[96px] flex items-center pl-7">
                <Logo/>
            </div>
            <div className="wrapper--body w-[310px] auto pt-20">
                <label className='font-bold'>Mật khẩu</label>
                <div className='mt-1 mb-2'>
                <Input type={'password'} placeholder={'Mật khẩu'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handlePasswordChange} />
                </div>

                <label className='font-bold'>Xác nhận mật khẩu</label>
                <div className='mt-1 mb-2'>
                <Input type={'password'} placeholder={'Mật khẩu'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handleConfirmPasswordChange} />
                </div>
                </div>
            <div className="wrapper--footer w-[345px] auto mt-40">
                <BasicFooter/>
            </div>
        </div>
    );
}