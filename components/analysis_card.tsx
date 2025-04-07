'use client'
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import { useRouter } from 'next/navigation'
// import Image from "next/image";

export function Analysis() {
    const router = useRouter()
    return (
        <Card isPressable disableRipple shadow="sm" className="py-4 cursor-pointer" onPress={() => router.push('/analysis')}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-xl uppercase font-bold">Analysis I</p>
            <small className="text-default-500 text-base">12 Weeks</small>
            <h4 className="font-bold text-large">Continuity, Infinity and beyond...</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            <Image
            // isZoomed
            alt="Ring"
            className="object-cover rounded-xl h-[50vh] w-[30vw]"
            src="/image.png"
            // width={800}
            shadow="sm"
            // height=

            />
        </CardBody>
        </Card>
    );
}   