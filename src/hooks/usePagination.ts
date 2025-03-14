import { useMemo } from 'react';
import { PaginationProps, PaginationUseResult } from '@/types';

export const usePagination = ({
    totalPages,
    currentPage,
    onPageChange,
}: PaginationProps): PaginationUseResult => {
    const displayedPages = useMemo<(number | string)[]>(() => {
        const pages: (number | string)[] = [];
        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {

            if (currentPage <= 7) {
                pages.push(...Array.from({ length: 7 }, (_, i) => i + 1));
                pages.push('...');
                pages.push(totalPages);
            }

            else if (currentPage > 7 && currentPage <= totalPages - 6) {
                pages.push(1);
                pages.push('...');

                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }

            else {
                pages.push(1);
                pages.push('...');

                for (let i = totalPages - 6; i <= totalPages; i++) {
                    pages.push(i);
                }
            }
        }

        return pages;
    }, [totalPages, currentPage]);


    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return {
        displayedPages,
        goToPreviousPage,
        goToNextPage,
    };
};