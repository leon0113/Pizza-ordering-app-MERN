import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-2xl">Pizza<span className="text-primary">Burg</span> </Link>
            <nav className="flex  items-center gap-8 text-gray-700 font-semibold">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Menu</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'} className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-400">Login</Link>
            </nav>
        </header>
    )
}
