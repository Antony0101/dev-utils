"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useWindowDimensionContext } from "@/lib/contexts/windowDimensionContext";

export function SaveHistorySwitch() {
    const dimension = useWindowDimensionContext();
    console.log(dimension);
    return (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="text-white">
                Save History
            </Label>
        </div>
    );
}
