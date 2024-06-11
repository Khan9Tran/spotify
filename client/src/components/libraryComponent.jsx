import { useState } from "react";
import { EmptyBroadcastList } from "./emptyBroadcastList";
import { BlueBoxComponent } from "./blueBoxComponent";

export const LibraryComponent = () => {
    const [showBlueBox, setShowBlueBox] = useState(false);

    const handleClick = () => {
        setShowBlueBox(true);
    }

    return (
        <div className="">
            {showBlueBox && <BlueBoxComponent />}
            <div className="flex flex-col">
                <EmptyBroadcastList header={'Tạo danh sách phát đầu tiên của bạn'} content={'Rất dễ, chúng tôi sẽ giúp bạn'} button={'Tạo danh sách phát'} onClick={handleClick}/>
                <EmptyBroadcastList header={'Hãy cùng tìm và theo dõi một số podcast'} content={'Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới'} button={'Duyệt xem podcast'}/>
            </div>
        </div> // Add closing tag for the div element
    );
}