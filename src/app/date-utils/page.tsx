"use client";

import Typography from "@/components/ui/typography";
import { useEffect, useState } from "react";
import moment from "moment";
import momentTimezone from "moment-timezone";

export default function DateUtilsPage() {
    const [curDate, setCurDate] = useState<Date | undefined>(undefined);
    useEffect(() => {
        setCurDate(new Date());
    }, []);
    console.log(momentTimezone.tz.names());
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
                <Typography variant="p">ISO String</Typography>
                <div>{curDate?.toISOString() || ""}</div>
                <Typography variant={"p"}>Locale String</Typography>
                <div>{curDate?.toLocaleString() || ""}</div>
                <Typography variant={"p"}>Milliseconds</Typography>
                <div>{curDate?.getTime() || ""}</div>
            </div>
        </main>
    );
}
