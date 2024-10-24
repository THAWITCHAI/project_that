import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2022-11-15',
});


export async function POST(req: NextRequest) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'THB',
                        product_data: {
                            name: 'รถยนต์',
                            description:'สำหรับการจ่ายครั้งคือการมัดจำครึ่งหนึ่งของราคารถคันนี้ อีกครึ่งหนึ่งลูกค้าจะได้จ่ายตอนมารับรถที่บริษัท ทรรศหำน้อย'
                        },
                        unit_amount: (200*100)/2,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/success/15`,
            cancel_url: `${req.headers.get('origin')}/booking-cars`,
        })

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.log('ERROR', error);
    }
}