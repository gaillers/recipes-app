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
        const newParams = new URLSearchParams(params.toString());

        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }

        if (key === "category" || key === "search") {
            newParams.delete("page");
        }

        router.replace(`?${newParams.toString()}`, { scroll: false });
    };

    return { searchParams: params, setQueryParam };
};
