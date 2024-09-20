"use client";

import { useWindowDimensionContext } from "@/lib/contexts/windowDimensionContext";
import { AlignCenter } from "lucide-react";

export function SideBarSwitch() {
    const dimension = useWindowDimensionContext();
    if (dimension.screenType === "xs" || dimension.screenType === "sm") {
        return (
            <div>
                <button>
                    <AlignCenter size={24} />
                </button>
            </div>
        );
    }
}

export function SideBarComponent() {
    const dimension = useWindowDimensionContext();
    if (dimension.screenType === "xs" || dimension.screenType === "sm") {
        return <></>;
    }
    return <div className="bg-yellow-600 w-full  h-full"></div>;
}
