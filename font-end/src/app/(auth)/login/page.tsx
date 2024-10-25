import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


type Props = object

export default function Login({ }: Props) {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Tabs defaultValue="Login" className="w-[500px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Login">ล็อกอิน</TabsTrigger>
                    <TabsTrigger value="Register">ลงทะเบียน</TabsTrigger>
                </TabsList>
                <TabsContent value="Login">
                    <Card>
                        <CardHeader>
                            <CardTitle>ล็อกอิน</CardTitle>
                            <CardDescription>
                                กรุณากรอกข้อมูลให้ครบ ก่อนกดเข้าสู่ระบบ
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">อีเมล์</Label>
                                <Input id="name" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">รหัสผ่าน</Label>
                                <Input id="username" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>เข้าสู่ระบบ</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                {/* Register */}
                <TabsContent value="Register">
                    <Card>
                        <CardHeader>
                            <CardTitle>ลงทะเบียน</CardTitle>
                            <CardDescription>
                                กรุณากรอก ชื่อ-นามสกุล ชื่อเล่น เบอร์โทร อีเมล์ รหัสผ่าน ยืนยันรหัส รูปโปรไฟล์ รูปใบขับขี่ ให้ครบ
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className='w-full justify-center items-center flex gap-2'>
                                <div className="space-y-1">
                                    <Label htmlFor="current">ชื่อ</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">นามสกุล</Label>
                                    <Input id="current" type="password" />
                                </div>
                            </div>
                            <div className='w-full justify-start items-center flex gap-2'>
                                <div className="space-y-1 w-full">
                                    <Label htmlFor="current">ชื่อเล่น</Label>
                                    <Input id="current" type="password" />
                                </div>
                            </div>
                            <div className='w-full justify-center items-center flex gap-2'>
                                <div className="space-y-1">
                                    <Label htmlFor="current">อีเมล์</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">เบอร์โทร</Label>
                                    <Input id="current" type="password" />
                                </div>
                            </div>
                            <div className='w-full justify-center items-center flex gap-2'>
                                <div className="space-y-1">
                                    <Label htmlFor="current">รหัสผ่าน</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">ยืนยันรหัส</Label>
                                    <Input id="current" type="password" />
                                </div>
                            </div>
                            <div className='w-full justify-center items-center flex gap-2'>
                                <div className="space-y-1">
                                    <Label htmlFor="current">รูปโปรไฟล์</Label>
                                    <Input id="current" type="file" className='py-2' />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">รูปใบขับขี่</Label>
                                    <Input id="current" type="file" className='py-2' />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>ลงทะเบียน</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}