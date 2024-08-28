/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'192.168.1.166'
            }
        ]
    }
};

export default nextConfig;
