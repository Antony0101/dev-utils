"use client";

const pageList = [{ name: "Home", location: "/" }];

export default function PageSelector() {
    return (
        <>
            <div className="flex pt-4 justify-center w-full">
                <input type="text" placeholder="Search" />
            </div>
            <div>
                {pageList.map((page, index) => {
                    return <>Hello</>;
                })}
            </div>
        </>
    );
}
