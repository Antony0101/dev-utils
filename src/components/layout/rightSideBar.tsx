"use client";
import { useWindowDimensionContext } from "@/lib/contexts/windowDimensionContext";

export default function RightSideBarComponent() {
    const dimension = useWindowDimensionContext();
    if (dimension.screenType === "xs" || dimension.screenType === "sm") {
        return <></>;
    }
    return (
        <div className="max-w-[20%] w-full h-[80vh] sm:h-[90vh]">
            <div className="bg-red-600 w-full h-full"></div>
        </div>
    );
}
