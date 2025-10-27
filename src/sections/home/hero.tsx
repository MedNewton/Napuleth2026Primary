"use client";

import { Box, Stack, Typography, type TypographyProps } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion, useReducedMotion } from "motion/react";

import heroAsset from "@/assets/images/hero/heroAsset.svg?url";

function WordReveal({
    text,
    variant = "h2",
    color,
    fontWeight = 600,
    delay = 0,
}: {
    text: string;
    variant: TypographyProps["variant"];
    color?: string;
    fontWeight?: number;
    delay?: number;
}) {
    const isReduced = useReducedMotion();

    const words = text.split(" ").map((w, i) => ({ w, key: `${w}-${i}` }));

    return (
        <Typography
            component="div"
            variant={variant}
            fontWeight={fontWeight}
            color={color}
            lineHeight={1.2}
            sx={{ display: "flex", flexWrap: "wrap", gap: "0.4ch" }}
        >
            {words.map(({ w, key }, idx) => (
                <motion.span
                    key={key}
                    style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
                    initial={isReduced ? { opacity: 0 } : { y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: delay + idx * (isReduced ? 0 : 0.06),
                        duration: isReduced ? 0.2 : 0.5,
                        ease: "easeOut",
                    }}
                >
                    {w}
                </motion.span>
            ))}
        </Typography>
    );
}

export default function Hero() {
    const isReduced = useReducedMotion();

    const tImage = 0.0;
    const tTitles = tImage + 0.7;
    const tCta = tTitles + 0.9;
    const tMetric = tCta + 0.15;
    const tNews = tMetric + 0.15;

    return (
        <Stack
            width="100%"
            minHeight="90vh"
            gap={4}
            pt={10}
            className="max-w-7xl mx-auto"
            px={16}
            position="relative"
            overflow="hidden"
        >
            <Box
                sx={{
                    width: "75%",
                    mx: "auto",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <motion.div
                    initial={
                        isReduced
                            ? { opacity: 0 }
                            : { clipPath: "inset(100% 0% 0% 0%)" }
                    }
                    animate={
                        isReduced
                            ? { opacity: 1 }
                            : { clipPath: "inset(0% 0% 0% 0%)" }
                    }
                    transition={{
                        delay: tImage,
                        duration: isReduced ? 0.25 : 0.8,
                        ease: "easeOut",
                    }}
                    style={{ position: "relative" }}
                >
                    <Image
                        src={heroAsset}
                        alt="heroAsset"
                        width={1000}
                        height={1000}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            display: "block",
                        }}
                        priority
                    />
                </motion.div>
            </Box>

            <Stack gap={2} sx={{ position: "relative", zIndex: 2 }}>
                <motion.div
                    initial={isReduced ? { opacity: 0 } : { y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: tNews,
                        duration: isReduced ? 0.25 : 0.5,
                        ease: "easeOut",
                    }}
                    style={{ position: "relative", zIndex: 2 }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={0.5}
                        width="fit-content"
                        sx={{
                            backgroundColor: theme.palette.brand.napulETHGrey1.main,
                            borderRadius: "10rem",
                            px: 1.5,
                        }}
                    >
                        <Typography variant="caption" fontWeight={600}>
                            The Horizon RWA market is live on Aave
                        </Typography>
                        <Typography variant="h6" color={theme.palette.secondary.main}>
                            &bull;
                        </Typography>
                        <Typography
                            variant="caption"
                            fontWeight={400}
                            color={theme.palette.secondary.main}
                        >
                            Learn more
                        </Typography>
                        <LiaLongArrowAltRightSolid
                            size={16}
                            color={theme.palette.secondary.main}
                        />
                    </Stack>
                </motion.div>
                <WordReveal
                    text="DeFi's largest lending network."
                    variant="h3"
                    delay={tTitles}
                />
                <WordReveal
                    text="Earn, borrow, save, and swap with millions of users."
                    variant="h6"
                    color={theme.palette.secondary.main}
                    delay={tTitles}
                />
            </Stack>

            <motion.div
                initial={isReduced ? { opacity: 0 } : { y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: tCta,
                    duration: isReduced ? 0.25 : 0.5,
                    ease: "easeOut",
                }}
                style={{ position: "relative", zIndex: 2 }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    width="fit-content"
                    sx={{
                        border: `0.5px solid ${theme.palette.grey[400]}`,
                        borderRadius: "10rem",
                        px: 1.5,
                        py: 1,
                    }}
                >
                    <Typography variant="subtitle1" fontWeight={600}>
                        Get Started
                    </Typography>
                    <HiOutlineArrowRight size={16} strokeWidth={2} />
                </Stack>
            </motion.div>

            <motion.div
                initial={isReduced ? { opacity: 0 } : { y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: tMetric,
                    duration: isReduced ? 0.25 : 0.5,
                    ease: "easeOut",
                }}
                style={{ position: "relative", zIndex: 2 }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                    width="fit-content"
                >
                    <Box
                        sx={{
                            width: 7,
                            height: 7,
                            backgroundColor: theme.palette.brand.napulETHPurple1.main,
                            borderRadius: "50%",
                        }}
                    />
                    <Stack direction="row" alignItems="center" gap={0.5}>
                        <Typography
                            variant="body2"
                            fontWeight={400}
                            color={theme.palette.primary.main}
                            sx={{ opacity: 0.7 }}
                        >
                            $64.89 billion
                        </Typography>
                        <Typography
                            variant="body2"
                            fontWeight={400}
                            color={theme.palette.secondary.main}
                        >
                            deposits currently supplied in Aave.
                        </Typography>
                    </Stack>
                </Stack>
            </motion.div>


        </Stack>
    );
}
