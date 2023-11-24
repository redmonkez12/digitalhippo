"use client";

import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Cart() {
    const itemsCount = 0;
    const fee = 0;

    return (
        <Sheet>
            <SheetTrigger className="group">
                <ShoppingCart aria-hidden="true"
                              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                </span>
            </SheetTrigger>

            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Cart (0)</SheetTitle>
                </SheetHeader>
                {itemsCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">cart items</div>
                        <div className="space-y-4 pr-6">
                            <Separator/>
                            <div className="space-y-1.5 text-sm">
                                <div className="flex">
                                    <div className="flex-1">Shipping</div>
                                    <span>Free</span>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">Transaction fee</div>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className="flex">
                                    <div className="flex-1">Total</div>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href="/cart" className={buttonVariants({
                                        className: "w-full",
                                    })}>Continue to Checkout</Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                            <Image src="/hippo-empty-cart.png" fill alt="empty shopping cart hippo"/>
                        </div>

                        <div className="text-xl font-semibold">
                            You cart is empty
                        </div>

                        <SheetTrigger asChild>
                            <Link href="/products" className={buttonVariants({
                                variant: "link",
                                size: "sm",
                                className: "text-sm text-muted-foreground",
                            })}>Add items to your cart to checkout</Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}