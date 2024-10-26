import express, { Request, Response } from 'express';
import cors from 'cors'
import multer from 'multer'
import { PrismaClient } from '@prisma/client';

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
app.delete('/cars/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const cars = await prisma.cars.delete({
            where: {
                id: parseInt(id)
            },
        })
        res.json(cars);
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
        res.json({ message: 'มีรายการนี้อยู่แล้ว' })
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
        res.json({ message: 'มีรายการนี้อยู่แล้ว' })
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
        const type = await prisma.type.update({
            where: { id: id },
            data: data
        })
        res.json(type);
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
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
        res.json({ message: 'มีรายการนี้อยู่แล้ว' })
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

app.put('/users/:id', upload.single('profileImage'), async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const id = parseInt(req.params.id);
        let updatedData: any = {};

        // ตรวจสอบว่าได้รับไฟล์หรือไม่
        if (req.file) {
            updatedData.profileImage = req.file.filename;
        }

        // รวมข้อมูลที่ส่งมาจาก body
        Object.assign(updatedData, data);

        // อัปเดตข้อมูลรถ
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: updatedData, // ใช้ updatedData ที่รวมข้อมูลแล้ว
        });

        // ส่งข้อมูลรถกลับไปยัง client
        res.json(user);
    } catch (error) {
        console.error(error); // ล็อกข้อผิดพลาดเพื่อวิเคราะห์
        res.status(500).json({ message: 'ไม่สามารถบันทึกข้อมูลรถได้' }); // ส่งสถานะ 500 เมื่อเกิดข้อผิดพลาด
    }
})

app.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const user = await prisma.user.delete({
            where: { id: id }
        })
        res.json(user);
    } catch (error) {
        res.json({ message: 'ไม่พบรายการนี้' })
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
