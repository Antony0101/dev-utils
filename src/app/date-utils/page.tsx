"use client";

import Typography from "@/components/ui/typography";
import { useState } from "react";

export default function DateUtilsPage() {
    const [curDate, setCurDate] = useState(new Date());
    return (
        <main className="p-4 w-full h-full">
            <Typography variant="h1">Date and Time Utils</Typography>
            <Typography variant="p">
                This page contains various date and time utilities.
            </Typography>
            <Typography variant="h2">Current Date&Time</Typography>
            <Typography variant="p">
                This section displays the current date and time.
            </Typography>
            <div>
                <div>{curDate.toISOString()}</div>
            </div>
        </main>
    );
}
