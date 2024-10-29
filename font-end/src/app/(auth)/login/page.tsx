'use client'
import { toast } from 'sonner'
import React, { useState } from 'react'
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
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


type Props = object

export default function Login({ }: Props) {
    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")

    const [fname, setFname] = useState<string>("")
    const [lname, setLname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [nickname, setNickname] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [image, setImage] = useState<File>("")

    const { data: session, status } = useSession()
    const router = useRouter()

    if (session?.user && status == "authenticated") {
        if (session.user.roleId == 1) {
            return router.replace('/admin/show/cars')
        }
        if (session.user.roleId == 2) {
            return router.replace('/client/all-cars')
        }
    }

    const handleSubmitLogin = () => {
        if (emailLogin === "" && passwordLogin === "") {
            toast.error('กรุณากรอกให้ครบ', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        } else {
            signIn("credentials", {
                username: emailLogin,
                password: passwordLogin,
                redirect: true,
                callbackUrl: "/login",
            });
        }
        toast.success('ล็อกอินสำเร็จ',{
            action: {
                label: 'ปิด'
            }
        })
        return
    };


    const handleSubmit = async () => {
        if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "" || nickname === "" || phone === "") {
            toast.error('กรุณากรอกข้อมูลให้ครบ', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }
        if (password !== confirmPassword) {
            toast.error('รหัสผ่านไม่ตรงกัน', {
                action: {
                    label: 'ปิด'
                }
            })
            return
        }

        const formData = new FormData()
        formData.append('name', fname + " " + lname)
        formData.append('nick_name', nickname)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('phone', phone)
        formData.append('profileImage', image)
        formData.append('roleId', 2)

        const response = await fetch('http://localhost:8000/users', {
            method: 'POST',
            body: formData,
        })

        if (response.ok) {
            alert('success')
            setFname("")
            setLname("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setNickname("")
            setPhone("")
            setImage(null)
            return window.location.reload()
        }
        return
    }

    if (status == "unauthenticated") {
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
                                    <Input type='email' onChange={(e) => setEmailLogin(e.target.value)} id="name" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">รหัสผ่าน</Label>
                                    <Input type='password' onChange={(e) => setPasswordLogin(e.target.value)} id="username" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={handleSubmitLogin}>เข้าสู่ระบบ</Button>
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
                                        <Input onChange={(e) => setFname(e.target.value)} value={fname} id="current" type="text" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="current">นามสกุล</Label>
                                        <Input onChange={(e) => setLname(e.target.value)} value={lname} id="current" type="text" />
                                    </div>
                                </div>
                                <div className='w-full justify-start items-center flex gap-2'>
                                    <div className="space-y-1 w-full">
                                        <Label htmlFor="current">ชื่อเล่น</Label>
                                        <Input onChange={(e) => setNickname(e.target.value)} value={nickname} id="current" type="text" />
                                    </div>
                                </div>
                                <div className='w-full justify-center items-center flex gap-2'>
                                    <div className="space-y-1">
                                        <Label htmlFor="current">อีเมล์</Label>
                                        <Input onChange={(e) => setEmail(e.target.value)} value={email} id="current" type="text" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="current">เบอร์โทร</Label>
                                        <Input onChange={(e) => setPhone(e.target.value)} value={phone} id="current" type="text" />
                                    </div>
                                </div>
                                <div className='w-full justify-center items-center flex gap-2'>
                                    <div className="space-y-1">
                                        <Label htmlFor="current">รหัสผ่าน</Label>
                                        <Input onChange={(e) => setPassword(e.target.value)} value={password} id="current" type="password" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="current">ยืนยันรหัส</Label>
                                        <Input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} id="current" type="password" />
                                    </div>
                                </div>
                                <div className='w-full justify-start items-center flex gap-2'>
                                    <div className="space-y-1">
                                        <Label htmlFor="current">รูปโปรไฟล์</Label>
                                        <Input onChange={(e) => setImage(e.target.files[0])} id="current" type="file" className='py-2' />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={() => handleSubmit()}>ลงทะเบียน</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }

}