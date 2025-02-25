import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, FileText, Trash2 } from "lucide-react"

const items = [
  { id: 1, name: "Item A", quantity: 50 },
  { id: 2, name: "Item B", quantity: 30 },
  { id: 3, name: "Item C", quantity: 70 },
]

export default function WarehouseItemList({ warehouseId }: { warehouseId: string }) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>
              <Button variant="ghost" size="sm">
                Quantity
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <FileText className="mr-2 h-4 w-4" /> Transactions
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="mr-2 h-4 w-4" /> Unassign
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

