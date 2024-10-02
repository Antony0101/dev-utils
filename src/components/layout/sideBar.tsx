"use client";

import { AlignCenter } from "lucide-react";
import PageSelector from "./pageSelector";

export function SideBarSwitch() {
    // const dimension = useWindowDimensionContext();
    return (
        <div className="md:hidden">
            <button>
                <AlignCenter size={24} color="#FFFFFF" />
            </button>
        </div>
    );
}

export function SideBarComponent() {
    return (
        <div className="max-w-[15vw] w-full h-[80vh] sm:h-[90vh] hidden md:block">
            <PageSelector />
        </div>
    );
}
