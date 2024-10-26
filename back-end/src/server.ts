import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';


const prisma = new PrismaClient()
const app = express();
const port = 8000;
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, '../font-end/public/uploads')
    },

    filename(req, file, callback) {
        const filename = `${Date.now()}-${file.originalname}`
        callback(null, filename)
    },
})
const upload = multer({ storage })

app.use(express.json())
app.use(cors())

// Cars
app.get('/cars', async (req: Request, res: Response) => {
    try {
        const cars = await prisma.cars.findMany({
            include: {
                type: true,
                status: true,
            },
        })
        res.json(cars);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลรถ' })
    }
});
app.get('/cars/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const cars = await prisma.cars.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                type: true,
                status: true,
            },
        })
        res.json(cars);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลรถ' })
    }
});
app.delete('/cars/:id', async (req: any, res: any) => {
    try {
        const id = req.params.id
        const image = await prisma.cars.findUnique({
            where: {
                id: parseInt(id)
            },
        })

        if (!image) {
            return res.status(404).json({ error: 'ไม่พบภาพ' });
        }

        // สร้างเส้นทางไฟล์
        const filePath = path.join('../font-end/public/uploads', image.image);
        console.log('File path:', filePath);

        await prisma.cars.delete({
            where: { id: parseInt(id) },
        });

        // ตรวจสอบว่าไฟล์มีอยู่จริง
        if (fs.existsSync(filePath)) {
            // ลบไฟล์จากระบบไฟล์
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`ลบไฟล์ไม่สำเร็จ: ${err}`);
                    return res.status(500).json({ error: 'ไม่สามารถลบไฟล์ได้' });
                }
                res.json({ success: 'ลบภาพเรียบร้อยแล้ว' });
            });
        } else {
            console.error('ไฟล์ไม่พบ:', filePath);
            return res.status(404).json({ error: 'ไฟล์ไม่พบ' });
        }
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลรถ' })
    }
});
app.post('/cars', upload.single('image'), async (req: Request, res: Response) => {
    try {
        const { brand, model, seat, color, license, price, typeId, statusId } = req.body
        const cars = await prisma.cars.create({
            data: {
                brand,
                model,
                seat: parseInt(seat),
                color,
                license,
                price: parseFloat(price),
                typeId: parseInt(typeId),
                statusId: parseInt(statusId),
                image: String(req.file?.filename),
            },
        })
        res.json(cars);
    } catch (error) {
        res.json({ message: 'ไม่สามารถบันทึกข้อมูลรถได้' })
    }
})
app.put('/cars/:id', upload.single('image'), async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const id = parseInt(req.params.id);
        let updatedData: any = {};

        // ตรวจสอบว่าได้รับไฟล์หรือไม่
        if (req.file) {
            updatedData.image = req.file.filename; // ถ้ามีไฟล์ให้เพิ่ม filename ลงใน updatedData
        }

        // รวมข้อมูลที่ส่งมาจาก body
        Object.assign(updatedData, data);

        // อัปเดตข้อมูลรถ
        const cars = await prisma.cars.update({
            where: {
                id: id,
            },
            data: updatedData, // ใช้ updatedData ที่รวมข้อมูลแล้ว
        });

        // ส่งข้อมูลรถกลับไปยัง client
        res.json(cars);
    } catch (error) {
        console.error(error); // ล็อกข้อผิดพลาดเพื่อวิเคราะห์
        res.status(500).json({ message: 'ไม่สามารถบันทึกข้อมูลรถได้' }); // ส่งสถานะ 500 เมื่อเกิดข้อผิดพลาด
    }
});

// status-car
app.get('/status-car', async (req: Request, res: Response) => {
    try {
        const status = await prisma.status.findMany({
            include: {
                cars: true,
            },
        })
        res.json(status);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลสถานะรถ' })

    }
});
app.get('/status-car/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const status = await prisma.status.findUnique({
            where: {
                id: id,
            },
            include: {
                cars: true,
            },
        })
        res.json(status);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลสถานะรถ' })
    }
});

app.post('/status-car', async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data);
        const status = await prisma.status.create({
            data: data
        })
        res.json(status);
    } catch (error) {
        res.status(404).json({ message: 'มีรายการนี้อยู่แล้ว' })
    }
});

app.delete('/status-car/:id', async (req: Request, res: Response) => {
    try {
        const data = req.body
        const id = parseInt(req.params.id)
        const status = await prisma.status.delete({
            where: { id: id }
        })
        res.json(status);
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
    }
});

app.put('/status-car/:id', async (req: Request, res: Response) => {
    try {
        const data = req.body
        const id = parseInt(req.params.id)
        const status = await prisma.status.update({
            where: { id: id },
            data: data
        })
        res.json(status);
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
    }
});
// type-car
app.get('/type-car', async (req: Request, res: Response) => {
    try {
        const type = await prisma.type.findMany({
            include: {
                cars: true,
            },
        })
        res.json(type);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลสถานะรถ' })

    }
});
app.get('/type-car/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const type = await prisma.type.findUnique({
            where: {
                id: id,
            },
            include: {
                cars: true,
            },
        })
        res.json(type);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลสถานะรถ' })
    }
});

app.post('/type-car', async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data);
        const type = await prisma.type.create({
            data: data
        })
        res.json(type);
    } catch (error) {
        res.status(404).json({ message: 'มีรายการนี้อยู่แล้ว' });
    }
});

app.delete('/type-car/:id', async (req: Request, res: Response) => {
    try {
        const data = req.body
        const id = parseInt(req.params.id)
        const type = await prisma.type.delete({
            where: { id: id }
        })
        res.json(type);
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
    }
});

app.put('/type-car/:id', async (req: Request, res: Response) => {
    try {
        const data = req.body
        const id = parseInt(req.params.id)
        console.log({ data, id });
        const type = await prisma.type.update({
            where: { id },
            data: data
        })
        res.json(type);
    } catch (error) {
        res.status(404).json({ message: 'ไม่พบรายการนี้' })
        console.log(error);
    }
});

// role-user
app.get('/role-user', async (req: Request, res: Response) => {
    try {
        const role = await prisma.role.findMany({
            include: {
                users: true,
            },
        })
        res.json(role);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลสถานะรถ' })

    }
});
app.get('/role-user/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const role = await prisma.role.findUnique({
            where: {
                id: id,
            },
            include: {
                users: true,
            },
        })
        res.json(role);
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลสถานะรถ' })
    }
});

app.post('/role-user', async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data);
        const role = await prisma.role.create({
            data: data
        })
        res.json(role);
    } catch (error) {
        res.status(404).json({ message: 'มีรายการนี้อยู่แล้ว' })
    }
});

app.delete('/role-user/:id', async (req: Request, res: Response) => {
    try {
        const data = req.body
        const id = parseInt(req.params.id)
        const role = await prisma.role.delete({
            where: { id: id }
        })
        res.json(role);
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
    }
});

app.put('/role-user/:id', async (req: Request, res: Response) => {
    try {
        const data = req.body
        const id = parseInt(req.params.id)
        const role = await prisma.role.update({
            where: { id: id },
            data: data
        })
        res.json(role);
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
    }
});

// users
app.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                Booking: true,
                role: true,
            }
        })
        res.json(users)
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลผู้ใช้ใช้' })
    }
})

app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const users = await prisma.user.findUnique({
            where: {
                id: id,
            },
            include: {
                Booking: true,
                role: true,
            }
        })
        if (users == null) {
            res.json({ message: 'ไม่พบรายการนี้' })
            return
        }
        res.json(users)
    } catch (error) {
        res.json({ message: 'ไม่พบข้อมูลผู้ใช้ใช้' })
    }
})

app.post('/users', upload.single('profileImage'), async (req: Request, res: Response) => {
    try {
        const { name, nick_name, email, password, phone, roleId, } = req.body
        const users = await prisma.user.create({
            data: {
                name,
                nick_name,
                email,
                password,
                phone,
                roleId: parseInt(roleId),
                profileImage: String(req.file?.filename)
            }
        })
        res.json(users)
        return
    } catch (error) {
        res.json({ message: 'ข้อมูลซ้ำกัน' })
        return
    }
})

app.put('/users/:id', upload.single('profileImage'), async (req: any, res: any) => {
    try {
        const data = req.body;
        const id = parseInt(req.params.id);
        let updatedData: any = {};

        // ค้นหาผู้ใช้เพื่อดึงไฟล์ภาพเก่า
        const existingUser = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        if (!existingUser) {
            return res.status(404).json({ message: 'ไม่พบผู้ใช้นี้' });
        }

        // ตรวจสอบว่ามีไฟล์ใหม่หรือไม่
        if (req.file) {
            const oldFilePath = path.join('../font-end/public/uploads', existingUser.profileImage);

            // ลบไฟล์ภาพเก่าถ้ามีอยู่จริง
            if (existingUser.profileImage && fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }

            // อัปเดตไฟล์ภาพใหม่ใน updatedData
            updatedData.profileImage = req.file.filename;
        }

        // รวมข้อมูลที่ส่งมาจาก body เข้ากับ updatedData
        Object.assign(updatedData, data);

        // อัปเดตข้อมูลผู้ใช้
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: data.roleId?Object.assign(updatedData, { roleId: parseInt(data.roleId) }):updatedData,
        });

        // ส่งข้อมูลผู้ใช้ที่อัปเดตกลับไปยัง client
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'ไม่สามารถบันทึกข้อมูลผู้ใช้ได้' });
    }
});

app.delete('/users/:id', async (req: any, res: any) => {
    try {
        const id = req.params.id
        const image = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            },
        })

        if (!image) {
            return res.status(404).json({ error: 'ไม่พบภาพ' });
        }

        // สร้างเส้นทางไฟล์
        const filePath = path.join('../font-end/public/uploads', image.profileImage);
        console.log('File path:', filePath);

        await prisma.user.delete({
            where: { id: parseInt(id) },
        });

        // ตรวจสอบว่าไฟล์มีอยู่จริง
        if (fs.existsSync(filePath)) {
            // ลบไฟล์จากระบบไฟล์
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`ลบไฟล์ไม่สำเร็จ: ${err}`);
                    return res.status(500).json({ error: 'ไม่สามารถลบไฟล์ได้' });
                }
                res.json({ success: 'ลบภาพเรียบร้อยแล้ว' });
            });
        } else {
            console.error('ไฟล์ไม่พบ:', filePath);
            return res.status(404).json({ error: 'ไฟล์ไม่พบ' });
        }
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
