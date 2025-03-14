import Link from "next/link";

interface DetailsLinkProps {
    href: string;
    name: string;
}

export const DetailsLink: React.FC<DetailsLinkProps> = ({ href, name }) => {
    return (
        <Link
            href={href}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm"
        >
            {name}
        </Link>
    );
};
