import Button from "./button";

export const EmptyBroadcastList = ({header, content, button, link}) => {
    return (
        <div className="w-auto h-auto bg-gray-very-dark p-5 m-2" style={{ borderRadius: '10px' }}>
            <h1 className="text-white-primary text-[14px] font-bold mb-2">
                {header !== undefined ? header : 'Header'}
            </h1>
            <h2 className="text-white-primary text-[14px] mb-[15px]">
                {content !== undefined ? content : 'Content'}
            </h2>
            <Button  onClick={''} fontStyle={'font-semibold'} radius={'15px'} label={button !== undefined ? button : 'Button'} backgroundColor={'bg-white'} fontColor={'text-black-primary'} width={'60%'} height={'36px'} />
            
        </div>
    );
}