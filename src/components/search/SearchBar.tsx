"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { SearchBarProps } from '@/types';
import { useDebounce, useQueryParams } from "@/hooks";

export const SearchBar: React.FC<SearchBarProps> = () => {
    const { searchParams, setQueryParam } = useQueryParams();

    const searchValue = useMemo(() => searchParams?.get("search") ?? "", [searchParams]);
    const [searchInputValue, setSearchInputValue] = useState(searchValue);

    const debouncedSearchValue = useDebounce(searchInputValue, 500);

    const prevSearchRef = useRef(debouncedSearchValue);

    useEffect(() => {
        if (prevSearchRef.current !== debouncedSearchValue) {
            setQueryParam("search", debouncedSearchValue);
            prevSearchRef.current = debouncedSearchValue;
        }
    }, [debouncedSearchValue, setQueryParam]);

    return (
        <div className="w-full">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    placeholder="Search recipes..."
                    value={searchInputValue}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    className="block w-full p-2.5 pr-4 pl-11 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>
    );
};
