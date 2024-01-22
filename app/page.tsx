'use client'
import { CardSection } from '@/components/etc/CardSection'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/Drawer'
import { AdvancedRealTimeChart } from '@/features/chart'

export default function Home() {
  return (
    <div>
      {/* <AdvancedRealTimeChart /> */}
      {/* <CardSection /> */}
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <button>Submit</button>
            <DrawerClose>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
