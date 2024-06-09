
import Logo from "../../components/logoAndText"
import Input from "../../components/input";
import { BasicFooter } from "../../components/footer";
import { useState } from "react";
import Button from "../../components/button";
import { useParams } from "react-router-dom";
import IconError from "../../components/iconError";
import IconSuccess from "../../components/iconSuccess";

export const ResetPassword = () => {
    const { token } = useParams();
    
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    };

    const buttonRegisterClicked = async (event)=>
    {
        event.preventDefault();
        if(password !== confirmPassword)
        {
            alert("Mật khẩu không khớp");
            return;
        }
        const response = await fetch('http://localhost:8080/v1/auth/new-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                confirm_password: confirmPassword,
                token: token
            })
        });
        const data = await response.json();
        if (response.ok){
            alert(data.message);
        }
        else {
            alert(data.message);
        }
    }
    return (
        <div className="wrapper bg-black-secondary w-screen min-h-screen flex flex-col overflow-y-auto items-center ">
            <div className="wrapper--header w-full h-[96px] flex items-center pl-7">
                <Logo/>
                <div className='container-notify w-full sm:w-[339px] hidden flex-row items-start p-5 rounded-md'>
                <div className='icon-error min-h-[21px] min-w-[21px] mr-1'>
                <IconError strokeColor={'#171717'} width={'21px'} height={'21px'} />
                </div>
                <div className='icon-success min-h-[21px] min-w-[21px] mr-1'>
                <IconSuccess fill={'#171717'} width={'21px'} height={'21px'} />
                </div>
                <span className='notify-message text-[#171717] text-[14px]'></span>
            </div>
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
               <div className='mt-11'>
                    <Button width={'100%'} height={'48px'} radius={'60px'} backgroundColor={'bg-green-light'} label={'Đổi mật khẩu'} fontColor={'text-black-primary'} fontSize={'15px'} fontStyle={'font-bold'} onClick={buttonRegisterClicked} />
                </div>
                </div>
                
            <div className="wrapper--footer w-[345px] auto mt-40">
                <BasicFooter/>
            </div>
        </div>
    );
}