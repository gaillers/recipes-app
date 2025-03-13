import React from 'react';

import { SearchBarProps } from '@/types';

export const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full p-2 border border-orange-300 rounded 
                focus:outline-none focus:ring-2 focus:ring-orange-400 
                transition-colors text-gray-900"
            />
        </div>
    );
};
