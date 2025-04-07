'use client'
import {Card, CardHeader, CardBody, CardFooter,Image} from "@heroui/react";
import { useRouter } from 'next/navigation'
// import Image from "next/image";

export function Diskmath() {
    const router = useRouter()
    return (
        <Card isPressable disableRipple shadow="sm" className="py-4 cursor-pointer" onPress={() => router.push('/diskmath')}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-xl uppercase font-bold ">Discrete Mathematics</p>
            <small className="text-default-500 text-base">12 Weeks</small>
            <h4 className="font-bold text-large">Everything about discrete stuff</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            <Image
            isZoomed={true}
            alt="Ring"
            className="object-cover rounded-xl h-[50vh] w-[30vw]"
            src="/diskmathimage.png"
            // width=
            shadow="sm"
            // height={400}
            />
        </CardBody>
        </Card>
    );
}   