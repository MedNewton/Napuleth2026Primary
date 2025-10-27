import { Box, Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { HiOutlineArrowRight } from "react-icons/hi";

import heroAsset from "@/assets/images/hero/heroAsset.svg?url";



const Hero = () => {
    return (
        <Stack width={"100%"} minHeight={"90vh"} gap={4} pt={10} className="max-w-7xl mx-auto" px={20} position={"relative"} overflow={"hidden"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={0.5} width={"fit-content"} sx={{
                backgroundColor: theme.palette.brand.napulETHGrey1.main,
                borderRadius: "10rem",
                px: 1.5,
            }}>
                <Typography variant="caption" fontWeight={600}>The Horizon RWA market is live on Aave</Typography>
                <Typography variant="h6" color={theme.palette.secondary.main}>&bull;</Typography>
                <Typography variant="caption" fontWeight={400} color={theme.palette.secondary.main}>Learn more</Typography>
                <LiaLongArrowAltRightSolid size={16} color={theme.palette.secondary.main} />
            </Stack>
            <Stack gap={2}>
                <Typography variant="h2" fontWeight={600} lineHeight={1.2}>
                    DeFi&apos;s largest lending network.
                </Typography>
                <Typography variant="h5" fontWeight={600} lineHeight={1.2} color={theme.palette.secondary.main}>
                    Earn, borrow, save, and swap with millions of users.
                </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1} width={"fit-content"} sx={{
                border: `0.5px solid ${theme.palette.grey[400]}`,
                borderRadius: "10rem",
                px: 1.5,
                py: 1,
            }}>
                <Typography variant="subtitle1" fontWeight={600}>Get Started</Typography>
                <HiOutlineArrowRight size={16} strokeWidth={2} />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1} width={"fit-content"}>
                <Box sx={{
                    width: 7,
                    height: 7,
                    backgroundColor: theme.palette.brand.napulETHPurple1.main,
                    borderRadius: "50%",
                }}></Box>
                <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                    <Typography variant="body2" fontWeight={400} color={theme.palette.primary.main} sx={{ opacity: 0.7 }}>$64.89 billion</Typography>
                    <Typography variant="body2" fontWeight={400} color={theme.palette.secondary.main}>deposits currently supplied in Aave.</Typography>
                </Stack>
            </Stack>
            <Image src={heroAsset} alt="heroAsset" width={1000} height={1000} style={{
                width: "75%",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                position: "absolute",
                objectFit: "cover",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
            }} />
        </Stack>
    );
};

export default Hero;