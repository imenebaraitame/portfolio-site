import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
];


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    //useLocation + useEffect together handle the auto-close on navigation.
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            bg-[rgba(10,8,15,0.85)] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]"
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <span
                        className="tracking-wide"
                        style={{ color: "#e8e8f0", fontWeight: 600, fontSize: "1.05rem" }}
                    >
                        Imene Baraitame<span style={{ color: "#c084fc" }}>.</span>
                    </span>
                </NavLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${isActive
                                    ? "text-[#c084fc]"
                                    : "text-[#9090aa] hover:text-[#e8e8f0]"
                                }`
                            }
                            style={({ isActive }) => ({
                                background: isActive ? "rgba(192,132,252,0.08)" : "transparent",
                            })}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-lg transition-colors"
                    style={{ color: "#9090aa" }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="md:hidden px-6 pb-6 pt-2"
                    style={{
                        background: "rgba(10,8,15,0.97)",
                        borderBottom: "1px solid rgba(192,132,252,0.08)",
                    }}
                >
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-lg text-sm transition-all duration-200 ${isActive ? "text-[#c084fc]" : "text-[#9090aa]"
                                    }`
                                }
                                style={({ isActive }) => ({
                                    background: isActive ? "rgba(192,132,252,0.08)" : "transparent",
                                })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}

        </header>
    )
}

export default Navbar