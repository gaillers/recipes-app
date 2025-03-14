import { useMemo } from 'react';
import { PaginationProps, PaginationUseResult } from '@/types';

const range = (start: number, end: number): number[] =>
    new Array(end - start + 1).fill(0).map((_, idx) => idx + start);

export const usePagination = ({
    totalPages,
    currentPage,
    onPageChange,
}: PaginationProps): PaginationUseResult => {
    const displayedPages = useMemo<(number | string)[]>(() => {
        if (totalPages <= 10) return range(1, totalPages);

        const delta = 2;

        let left = currentPage - delta;
        let right = currentPage + delta;

        if (left <= 2) {
            left = 2;
            right = 2 * delta + 1;
        } else if (right >= totalPages - 1) {
            left = totalPages - 2 * delta;
            right = totalPages - 1;
        }

        const pages: (number | string)[] = [1];

        if (left > 2) pages.push('...');
        pages.push(...range(left, right));
        if (right < totalPages - 1) pages.push('...');

        pages.push(totalPages);
        return pages;
    }, [totalPages, currentPage]);


    const goToPreviousPage = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return {
        displayedPages,
        goToPreviousPage,
        goToNextPage,
    };
};