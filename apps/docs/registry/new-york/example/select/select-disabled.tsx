import { Label } from "@/registry/new-york/ui/field"
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export default function SelectDisabled() {
  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Choose frequency</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          <SelectItem id="rarely">Rarely</SelectItem>
          <SelectItem id="sometimes">Sometimes</SelectItem>
          <SelectItem id="always">Always</SelectItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
