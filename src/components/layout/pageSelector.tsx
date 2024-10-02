"use client";

import Link from "next/link";

const pageList = [
    { name: "Home", location: "/" },
    { name: "Date Utils", location: "/date-utils" },
];

export default function PageSelector() {
    return (
        <div>
            <div className="px-4 py-6 w-full bg-slate-100 border  border-gray-800">
                <input className="w-full" type="text" placeholder="Search" />
            </div>
            <div>
                {pageList.map((page, index) => {
                    return (
                        <Link href={page.location} key={index}>
                            <div className="p-4 border border-gray-800">
                                {page.name}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
