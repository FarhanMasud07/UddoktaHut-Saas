"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectContent,
} from "@/components/ui/select";
import { FilterContent } from "./FilterContent";
import BottomDrawer from "./BottomDrawer";

const categories = ["All", "Clothing", "Electronics", "Shoes", "Accessories"];
const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low"];

export default function Shop({
    ctaColor = "bg-green-400",
    ctaHoverColor = "#05f27c",
    children
}) {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(sortOptions[0]);

    return (
        <div className="h-screen bg-gradient-to-b from-white to-gray-200 text-neutral-900 font-sans flex">
            <aside className="w-1/4 hidden lg:block sticky top-0 h-screen overflow-y-auto p-6 border-r space-y-6">
                <FilterContent categories={categories} ctaColor={ctaColor} />
            </aside>

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <div className="sticky top-0 bg-gradient-to-l from-gray-100 to-white z-10 px-6 py-4 border-b">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className="w-full md:w-1/2 border border-neutral-300 rounded-md px-3 py-2 text-sm"
                        />
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <Select value={sort} onValueChange={setSort}>
                                <SelectTrigger className="w-full md:w-60 border border-neutral-300 rounded-md px-3 py-2 text-sm">
                                    {sort}
                                </SelectTrigger>
                                <SelectContent>
                                    {sortOptions.map((opt) => (
                                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <BottomDrawer
                                categories={categories}
                                ctaColor={ctaColor}
                                ctaHoverColor={ctaHoverColor}
                            />
                        </div>
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
}