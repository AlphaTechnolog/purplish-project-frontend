import { NavLink } from "react-router";
import { Home, Package, List } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white p-6">
            <nav className="space-y-4">
                <NavLink
                    to="/"
                    className="flex items-center space-x-2 text-xl font-bold mb-6"
                >
                    <Package className="h-6 w-6" />
                    <span>Purplish Project</span>
                </NavLink>
                <NavLink
                    to="/"
                    className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
                >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    to="/items"
                    className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-700"
                >
                    <List className="h-5 w-5" />
                    <span>Items</span>
                </NavLink>
            </nav>
        </aside>
    );
}
