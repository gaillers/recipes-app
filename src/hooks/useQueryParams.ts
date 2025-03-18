import { useSearchParams, useRouter } from "next/navigation";

export const useQueryParams = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const setQueryParam = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

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

    return { searchParams, setQueryParam };
};
