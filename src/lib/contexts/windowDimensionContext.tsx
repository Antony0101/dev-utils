"use client";
import { useState, createContext, useContext, useEffect } from "react";

export type WindowDimensionContextType = {
    width: number;
    height: number;
    screenType: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const windowDimensionContext = createContext<WindowDimensionContextType | null>(
    null,
);

export function WindowDimenstionContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [dimension, setDimension] = useState<WindowDimensionContextType>({
        width: 0,
        height: 0,
        screenType: "xs",
    });
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            let screenType: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
            screenType = "xs";
            if (width >= 640) screenType = "sm";
            if (width >= 768) screenType = "md";
            if (width >= 1024) screenType = "lg";
            if (width >= 1280) screenType = "xl";
            if (width >= 1536) screenType = "2xl";
            setDimension({ width, height, screenType });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <windowDimensionContext.Provider value={dimension}>
            {children}
        </windowDimensionContext.Provider>
    );
}

export const useWindowDimensionContext = () => {
    const context = useContext(windowDimensionContext);
    if (!context) {
        throw new Error(
            "useWindowDimensionContext must be used within a WindowDimensionContextProvider",
        );
    }
    return context;
};
