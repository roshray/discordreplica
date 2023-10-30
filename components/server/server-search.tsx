"use client"

import { Search } from "lucide-react";

interface ServerSearchProps {
    data: {
        label: string;
        type: "channel" | "member",
        data: {
            icon: React.ReactNode;
            name: string;
            id: string;
        } [] | undefined
    } []
}


export const ServerSearch = ({
    data
}: ServerSearchProps) => {
    return (
       <>
        <button
            className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition "
        >
            <Search />
            <p>search</p>
        </button>
       </> 
    )
}