import { useState } from "react"
import Logo from "../../components/logoAndText"
import Input from "../../components/input";
import './forgotPassword.css'
import Button from "../../components/button";
import { BasicFooter } from "../../components/footer";

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [inputError, setInputError] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', type: 'success'});
    const [isLoading, setIsLoading] = useState(false);
    const buttonGetLinkClicked = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (inputError) {
            return;
        }

        const response = await fetch('http://localhost:8080/v1/auth/password-reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        });

        const data = await response.json();
        if (response.ok){
            setAlert({ show: true, message: data.message });
        }
        else {
            setAlert({ show: true, message:"Email klhông hợp lệ, vui lòng thử lại", type: 'error' });
        }
        
        setIsLoading(false);

    }
    return (
        <div className="wrapper bg-black-secondary w-screen min-h-screen flex flex-col overflow-y-auto items-center ">
            {isLoading && (
                <div className="loading-overlay">
                    <div className="dots">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
            <div className="wrapper--header w-full h-[96px] flex items-center pl-7">
                <Logo/>
            </div>
            {alert.show && (
            <div className={`alert m-5 ${alert.type === 'error' ? 'text-red-light' : 'text-green-light'}`}>
            {alert.message}
            </div>
            )}
            <div className="wrapper--body w-[310px] auto">
                <h1 className="text-white-primary sm:text-[30px] font-bold mb-5">
                Đặt lại mật khẩu của bạn
                </h1>
                <h2 className="sm:text-[15px]">
                    Nhập địa chỉ email hoặc tên người dùng của bạn, sau đó, chúng tôi sẽ gửi cho bạn một đường liên kết để lấy lại quyền truy cập vào tài khoản.
                </h2>
                <h1 className="sm:text-[13px] font-bold mt-5 mb-2">
                    Địa chỉ email hoặc tên người dùng
                </h1>
                <form>
                    <div className="mb-5">
                        <Input width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={(event) => {setEmail(event.target.value)}} handleInputError={(error)=> {setInputError(error)}} type={'notEmpty'}/>
                    </div>
                    <div className="mb-5">
                        <Button onClick={buttonGetLinkClicked} label={"Gửi đường liên kết"} height={'48px'} width={'100%'} backgroundColor={'bg-green-light'} fontColor={'text-black-primary'} fontSize={'15px'} fontStyle={'font-bold'}/>
                    </div>
                </form>
                <a href="" className="sm:text-[13px] underline font-semibold">
                    Bạn cần hỗ trợ?
                </a>
            </div>
            <div className="wrapper--footer w-[345px] auto mt-40">
                <BasicFooter/>
            </div>
        </div>
    )
}