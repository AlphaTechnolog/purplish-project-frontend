import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import WarehouseList from "@/components/WarehouseList";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Warehouses</h1>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Create Warehouse
                    </Button>
                </div>
                <WarehouseList />
            </main>
        </div>
    );
}
