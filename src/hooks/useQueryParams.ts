"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export const useQueryParams = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const params = useMemo(() => {
        return new URLSearchParams(searchParams?.toString() || "");
    }, [searchParams]);

    const setQueryParam = (key: string, value: string) => {
        if (!params) return;

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        if (key === "category" || key === "search") {
            params.delete("page");
        }

        router.replace(`?${params.toString()}`, { scroll: false });
    };

    return { searchParams: params, setQueryParam };
};
