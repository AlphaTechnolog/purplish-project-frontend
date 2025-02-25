import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ItemList from "@/components/ItemList";

export default function ItemsPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Items</h1>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New Item
                    </Button>
                </div>
                <ItemList />
            </main>
        </div>
    );
}
