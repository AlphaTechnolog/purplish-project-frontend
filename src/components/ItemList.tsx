import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Building2, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const items = [
  { id: 1, name: "Item A", totalQuantity: 150, warehouses: ["Warehouse A", "Warehouse B"] },
  { id: 2, name: "Item B", totalQuantity: 80, warehouses: ["Warehouse C"] },
  { id: 3, name: "Item C", totalQuantity: 200, warehouses: ["Warehouse A", "Warehouse B", "Warehouse C"] },
  { id: 4, name: "Item D", totalQuantity: 0, warehouses: [] },
]

export default function ItemList() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>
              <Button variant="ghost" size="sm">
                Total Quantity
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Warehouses</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.totalQuantity}</TableCell>
              <TableCell>
                {item.warehouses.length > 0 ? (
                  item.warehouses.map((warehouse, index) => (
                    <Badge key={index} variant="secondary" className="mr-1">
                      {warehouse}
                    </Badge>
                  ))
                ) : (
                  <span className="text-gray-400">Not assigned</span>
                )}
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <Building2 className="mr-2 h-4 w-4" /> Assign to Warehouse
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

