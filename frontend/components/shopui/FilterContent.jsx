"use client"

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Slider } from "../ui/slider";
import SubmitButton from "../common/SubmitButton";

export function FilterContent({ categories, ctaColor }) {
    const [category, setCategory] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 100]);

    return (
        <>
            <h1 className="text-3xl font-bold tracking-tight px-4">Shop</h1>
            <div className="space-y-6 px-4 my-7">
                <div className="w-full">
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                            {category}
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Price Range</label>
                    <Slider
                        defaultValue={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={200}
                        step={1}
                        className={` [&_[role=slider]]:${ctaColor}`}
                        rangeColor={ctaColor}
                    />
                    <div className="flex justify-between text-sm mt-2 text-neutral-700">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>

                <SubmitButton className={`w-full text-sm font-semibold hover:bg-[#05f27c]
        py-2 rounded-md shadow-sm cursor-pointer ${ctaColor}`}
                >
                    <span className="font-semibold text-green-900">Apply Filters</span>
                </SubmitButton>
            </div>
        </>
    );
}