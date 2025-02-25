import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { NavLink, useParams } from "react-router";

import WarehouseItemList from "@/components/WarehouseItemList";
import Sidebar from "@/components/Sidebar";

export default function WarehouseDetail() {
    const { id } = useParams();

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <NavLink to="/">
                            <Button variant="ghost" size="sm" className="mr-4">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back
                            </Button>
                        </NavLink>
                        <h1 className="text-2xl font-bold">Warehouse</h1>
                    </div>
                    <div className="space-x-2">
                        <Button variant="outline">Assign Items</Button>
                        <Button variant="outline">View Transactions</Button>
                        <Button variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete Warehouse
                        </Button>
                    </div>
                </div>
                <WarehouseItemList warehouseId={id ?? ""} />
            </main>
        </div>
    );
}
