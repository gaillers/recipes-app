import NavBar from "@/components/navbar/Navbar";

export default function Header() {
    return (
        <header className="header sticky top-0 z-10 bg-white">
            <div className="container mx-auto px-4">
                <NavBar />
            </div>
        </header>
    );
};

