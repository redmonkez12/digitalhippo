"use client";

import { useState } from "react";
import { PRODUCT_CATEGORIES } from "@/config";
import { NavItem } from "./NavItem";

export function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;

    return (
        <div className="flex gap-4 w-full">
            {PRODUCT_CATEGORIES.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(i);
                    }
                }

                const isOpen = i === activeIndex;

                return (
                    <NavItem
                        key={category.value}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        category={category}
                        isAnyOpen={isAnyOpen}
                    />
                );
            })}
        </div>
    );
}