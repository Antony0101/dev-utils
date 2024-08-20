import { SaveHistorySwitch } from "./saveHistorySwitch";
import { Search } from "./search";

export default async function TopBarComponent() {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800">
            <h1 className="text-2xl font-bold text-white">dev.utils.common</h1>
            <div className="flex justify-center gap-6">
                <SaveHistorySwitch />
                <Search />
            </div>
        </div>
    );
}
