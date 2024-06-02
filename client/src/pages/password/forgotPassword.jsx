import { useState } from "react"
import Logo from "../../components/logoAndText"
import Input from "../../components/input";
import './forgotPassword.css'

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [inputError, setInputError] = useState(false);

    return (
        <div className="wrapper bg-black-secondary w-screen min-h-screen flex flex-col overflow-y-auto items-center ">
            <div className="wrapper--header w-full h-[96px] flex items-center pl-7">
                <Logo/>
            </div>

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
                        <Input type={'email'} placeholder={''} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={(event) => {setEmail(event.target.value)}} handleInputError={(event)=> {setInputError(event.target.value)}}/>
                    </div>
                </form>
                <a href="" className="sm:text-[13px] underline font-semibold">
                    Bạn cần hỗ trợ?
                </a>
            </div>
        </div>
    )
}