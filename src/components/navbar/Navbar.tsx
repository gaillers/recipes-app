
"use client";

import Link from "next/link";

import { navLinks } from "./navLinks";

export default function NavBar() {
    return (
        <nav className="max-w-5xl m-auto flex items-center justify-between px-4 py-4">
            <div className="font-markRegular flex items-center gap-2">
                Modern Recipes
            </div>

            <div className="flex items-center gap-6">
                <>
                    <ul className="flex gap-6">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.url}
                                    className="font-markRegular hover:text-cyan-500 transition-colors"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>

            </div>
        </nav>
    );
}
