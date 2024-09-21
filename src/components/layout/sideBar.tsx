"use client";

import { useWindowDimensionContext } from "@/lib/contexts/windowDimensionContext";
import { AlignCenter } from "lucide-react";
import PageSelector from "./pageSelector";

export function SideBarSwitch() {
    const dimension = useWindowDimensionContext();
    if (dimension.screenType === "xs" || dimension.screenType === "sm") {
        return (
            <div>
                <button>
                    <AlignCenter size={24} color="#FFFFFF" />
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
    return (
        <div className="max-w-[15%] w-full h-[80vh] sm:h-[90vh]">
            <PageSelector />
        </div>
    );
}
