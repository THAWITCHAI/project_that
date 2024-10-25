'use client'

import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <div className='flex justify-center items-center h-[100vh]'>
                    <div className="w-[16%] border h-full bg-white flex flex-col justify-start items-center gap-2">
                        <div className='border-b border-dotted border-slate-500 w-full flex justify-center items-center gap-2 py-2 px-5'>
                            <Image src={'/car_b.png'} width={40} height={40} alt='' className='rounded-full w-[40px] h-[40px]' />
                            <div className='text-[16px] font-medium text-black'>ธวิชชัย บุญส่ง</div>
                        </div>
                        <div className="w-full h-full flex flex-col justify-start items-center gap-2 p-2">
                            <button className="text-xs text-gray-500 w-full rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                เพิ่มข้อมูล
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/create-cars'}>
                                    <div className="w-[15px] h-[15px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">ข้อมูลรถ</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/create-type-car'}>
                                    <div className="w-[15px] h-[15px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">ประเภทรถ</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/create-status'}>
                                    <div className="w-[15px] h-[15px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">สถานะรถ</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/create-user'}>
                                    <div className="w-[15px] h-[15px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">ผู้ใช้</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/create-role'}>
                                    <div className="w-[15px] h-[15px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" /><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">บทบาทหน้าที่</div>
                                </Link>
                            </button>
                            <button className="text-xs text-gray-500 w-full rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                ตารางข้อมูล
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/show/cars'}>
                                    <div className="w-[17px] h-[17px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="m19.5,2H4.5C2.019,2,0,4.019,0,6.5v10c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,9h5v5H1v-5Zm6,0h16v5H7v-5Zm16-2.5v1.5H7V3h12.5c1.93,0,3.5,1.57,3.5,3.5ZM4.5,3h1.5v5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,13.5v-1.5h5v5h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H7v-5h16v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">รถยนต์</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/show/type-cars'}>
                                    <div className="w-[17px] h-[17px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="m19.5,2H4.5C2.019,2,0,4.019,0,6.5v10c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,9h5v5H1v-5Zm6,0h16v5H7v-5Zm16-2.5v1.5H7V3h12.5c1.93,0,3.5,1.57,3.5,3.5ZM4.5,3h1.5v5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,13.5v-1.5h5v5h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H7v-5h16v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">ประเภทรถ</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/show/status-cars'}>
                                    <div className="w-[17px] h-[17px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="m19.5,2H4.5C2.019,2,0,4.019,0,6.5v10c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,9h5v5H1v-5Zm6,0h16v5H7v-5Zm16-2.5v1.5H7V3h12.5c1.93,0,3.5,1.57,3.5,3.5ZM4.5,3h1.5v5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,13.5v-1.5h5v5h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H7v-5h16v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">สถานะรถ</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/show/users'}>
                                    <div className="w-[17px] h-[17px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="m19.5,2H4.5C2.019,2,0,4.019,0,6.5v10c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,9h5v5H1v-5Zm6,0h16v5H7v-5Zm16-2.5v1.5H7V3h12.5c1.93,0,3.5,1.57,3.5,3.5ZM4.5,3h1.5v5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,13.5v-1.5h5v5h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H7v-5h16v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">ผู้ใช้</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/show/roles'}>
                                    <div className="w-[17px] h-[17px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="m19.5,2H4.5C2.019,2,0,4.019,0,6.5v10c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,9h5v5H1v-5Zm6,0h16v5H7v-5Zm16-2.5v1.5H7V3h12.5c1.93,0,3.5,1.57,3.5,3.5ZM4.5,3h1.5v5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,13.5v-1.5h5v5h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H7v-5h16v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">บทบาทหน้าที่</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={'/admin/show/booking'}>
                                    <div className="w-[17px] h-[17px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-blue-500 transition-colors duration-300"
                                        >
                                            <path d="m19.5,2H4.5C2.019,2,0,4.019,0,6.5v10c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,9h5v5H1v-5Zm6,0h16v5H7v-5Zm16-2.5v1.5H7V3h12.5c1.93,0,3.5,1.57,3.5,3.5ZM4.5,3h1.5v5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,13.5v-1.5h5v5h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H7v-5h16v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">ตารางจองรถ</div>
                                </Link>
                            </button>
                            <button className="w-full hover:bg-[#d7e5ff] rounded-sm h-[2.5rem] px-2 group flex justify-stretch mt-5 gap-2 items-center">
                                <Link className="w-full flex gap-2 justify-start items-center" href={''}>
                                    <div className="w-[17px] h-[17px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-full h-full text-gray-500 group-hover:text-red-500 transition-colors duration-300"
                                        >
                                            <path d="m24,12c0,.534-.208,1.037-.586,1.414l-4.565,4.444-.697-.717,4.561-4.439c.058-.058.093-.132.135-.202H6v-1h16.846c-.042-.071-.078-.147-.139-.207l-4.556-4.435.697-.717,4.561,4.439c.383.382.591.885.591,1.419Zm-13,9.5c0,.827-.673,1.5-1.5,1.5H2.5c-.827,0-1.5-.673-1.5-1.5V2.5c0-.827.673-1.5,1.5-1.5h7c.827,0,1.5.673,1.5,1.5v6.5h1V2.5c0-1.378-1.122-2.5-2.5-2.5H2.5C1.122,0,0,1.122,0,2.5v19c0,1.379,1.122,2.5,2.5,2.5h7c1.378,0,2.5-1.121,2.5-2.5v-6.5h-1v6.5Z" />
                                        </svg>
                                    </div>
                                    <div className=" text-gray-500 text-sm group-hover:text-red-500 transition-colors duration-300">ออกจากระบบ</div>
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="w-[84%] h-full p-5 bg-[#f5f5f5]">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}