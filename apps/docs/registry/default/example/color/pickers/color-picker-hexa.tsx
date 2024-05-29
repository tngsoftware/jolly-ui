import React from "react"
import { parseColor } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  SliderTrack,
} from "@/registry/default/ui/color"
import { Dialog, DialogTrigger } from "@/registry/default/ui/dialog"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { Popover } from "@/registry/default/ui/popover"

export function HexaPicker() {
  let [color, setColor] = React.useState(parseColor("#FF000050"))

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button variant="ghost" className="h-fit flex gap-2 items-center p-1">
          <ColorSwatch className="rounded-md size-8 border-2" />
          Hex Alpha Color
        </Button>
        <Popover placement="bottom start" className="w-fit">
          <Dialog className="outline-none flex flex-col gap-4">
            <div>
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="border-b-0 rounded-b-none h-[136px]"
              >
                <ColorThumb className="z-50" />
              </ColorArea>
              <ColorSlider colorSpace="hsb" channel="hue">
                <SliderTrack className="rounded-none border-y-0">
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
              <ColorSlider colorSpace="hsb" channel="alpha">
                <SliderTrack
                  className="rounded-t-none border-t-0"
                  style={({ defaultStyle }) => ({
                    background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
                  })}
                >
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            </div>
            <ColorField className="w-[192px]">
              <Label>Hex</Label>
              <Input className="" />
            </ColorField>
            <ColorField channel="alpha" className="w-[192px]">
              <Label>Alpha</Label>
              <Input className="" />
            </ColorField>
            <ColorSwatchPicker className="w-[192px]">
              <ColorSwatchPickerItem color="#F00">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#f90">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#0F0">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#08f">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#00f">
                <ColorSwatch />
              </ColorSwatchPickerItem>
            </ColorSwatchPicker>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  )
}

export default HexaPicker