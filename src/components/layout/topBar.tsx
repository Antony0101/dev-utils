import { SaveHistorySwitch } from "./saveHistorySwitch";
import { SideBarSwitch } from "./sideBar";

export default async function TopBarComponent() {
    return (
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between p-4 h-[20vh] sm:h-[10vh] gap-10 bg-gray-800">
            <SideBarSwitch />
            <h1 className="text-2xl font-bold text-white">dev.utils</h1>
            <SaveHistorySwitch />
        </div>
    );
}
