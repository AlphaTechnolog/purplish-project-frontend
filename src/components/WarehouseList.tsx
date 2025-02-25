import { NavLink } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const warehouses = [
    { id: 1, name: "Warehouse A", itemCount: 150 },
    { id: 2, name: "Warehouse B", itemCount: 230 },
    { id: 3, name: "Warehouse C", itemCount: 80 },
];

export default function WarehouseList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouses.map((warehouse) => (
                <NavLink to={`/warehouses/${warehouse.id}`} key={warehouse.id}>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{warehouse.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500">
                                {warehouse.itemCount} items
                            </p>
                        </CardContent>
                    </Card>
                </NavLink>
            ))}
        </div>
    );
}
