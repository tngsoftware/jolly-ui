import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { Checkbox, CheckboxGroup } from "@/registry/new-york/ui/checkbox"
import { FieldError, Label } from "@/registry/new-york/ui/field"

export default function CheckboxGroupValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <CheckboxGroup name="condiments" isRequired className="space-y-1">
        <Label>Sandwich condiments</Label>
        <Checkbox value="lettuce">Lettuce</Checkbox>
        <Checkbox value="tomato">Tomato</Checkbox>
        <Checkbox value="onion">Onion</Checkbox>
        <Checkbox value="sprouts">Sprouts</Checkbox>
        <FieldError />
      </CheckboxGroup>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
