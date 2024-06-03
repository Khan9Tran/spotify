import { EmptyBroadcastList } from "./emptyBroadcastList";
export const LibraryComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col">
            <EmptyBroadcastList header={'Tạo danh sách phát đầu tiên của bạn'} content={'Rất dễ, chúng tôi sẽ giúp bạn'} button={'Tạo danh sách phát'}/>
            <EmptyBroadcastList header={'Hãy cùng tìm và theo dõi một số podcast'} content={'Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới'} button={'Duyệt xem podcast'}/>
        </div>
    );
}