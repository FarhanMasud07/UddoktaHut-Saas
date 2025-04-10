import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
} from "@/components/ui/drawer";
import SubmitButton from '../common/SubmitButton'
import { Button } from "../ui/button";
import { FilterContent } from "./FilterContent";

export default function BottomDrawer({ categories, ctaColor, ctaHoverColor }) {
    return (
        <div className="lg:hidden">
            <Drawer>
                <DrawerTrigger asChild>
                    <SubmitButton className={`w-full text-sm font-semibold hover:bg-[${ctaHoverColor}]
            px-3 py-2 rounded-md shadow-sm cursor-pointer ${ctaColor}`}
                    >
                        <span className="font-semibold text-green-900">Filters</span>
                    </SubmitButton>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Filters</DrawerTitle>
                        <DrawerClose asChild>
                            <Button variant="ghost" className="absolute top-4 right-4">
                                ✕
                            </Button>
                        </DrawerClose>
                    </DrawerHeader>
                    <FilterContent categories={categories} ctaColor={ctaColor} />
                </DrawerContent>
            </Drawer>
        </div>
    )
}