"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Stack, Typography, Button, IconButton } from "@mui/material";
import theme from "@/theme/theme";

import logo from "@/assets/images/logo/Asset 194.svg?url";

import { FiSearch } from "react-icons/fi";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuContentItem,
} from "@/components/generic/navigationMenu";

export default function Header() {
    return (
        <header className="z-50 w-full bg-transparent">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-32">
                <Link href="/" className="inline-flex items-center gap-3">
                    <Image src={logo} alt="mood global services mgs logo" width={120} height={27} priority />
                </Link>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-pill">
                                    <Typography component={"span"} variant="subtitle1" fontWeight={600} color={theme.palette.text.primary}>
                                        Products
                                    </Typography>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Stack alignItems={"center"}>
                                        <NavigationMenuContentItem href="/services/smart-contracts">
                                            <Stack minWidth={300} gap={1.5} sx={{
                                                backgroundColor: theme.palette.brand.napulETHPurple1.main,
                                                borderRadius: 2,
                                                padding: 1,
                                            }}>
                                                <Stack height={40} width={40} sx={{
                                                    backgroundColor: theme.palette.background.default,
                                                    borderRadius: "50%",
                                                }}>
                                                </Stack>
                                                <Stack>
                                                    <Typography component="span" variant="subtitle1" fontWeight={600} color={theme.palette.background.default}>Apps</Typography>
                                                    <Typography component="span" variant="body2" color={theme.palette.background.default}>Interact with Aave easily and securely.</Typography>
                                                </Stack>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/services/smart-contracts">
                                            <Stack minWidth={300} gap={1.5} sx={{
                                                backgroundColor: theme.palette.brand.napulETHGreen1.main,
                                                borderRadius: 2,
                                                padding: 1,
                                            }}>
                                                <Stack height={40} width={40} sx={{
                                                    backgroundColor: theme.palette.background.default,
                                                    borderRadius: "50%",
                                                }}>
                                                </Stack>
                                                <Stack>
                                                    <Typography component="span" variant="subtitle1" fontWeight={600} color={theme.palette.background.default}>GHO</Typography>
                                                    <Typography component="span" variant="body2" color={theme.palette.background.default}>The Aave native stablecoin.</Typography>
                                                </Stack>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                    </Stack>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-pill">
                                    <Typography component={"span"} variant="subtitle1" fontWeight={600} color={theme.palette.text.primary}>
                                        Ressources
                                    </Typography>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Stack direction={"row"} alignItems={"stretch"} gap={0.75}>
                                        <NavigationMenuContentItem href="/services/smart-contracts" className="flex flex-1 p-0"  >
                                            <Stack minWidth={300} className="h-full" height={"100%"} gap={1.5} sx={{
                                                borderRadius: 2,
                                                paddingX: 1,
                                                paddingY: 1.5,
                                                display: "flex",
                                                flex: 1,
                                                flexGrow: 1,
                                                gap: 2,
                                            }}>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Blog</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>The latest news & updates.</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Brand</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>Assets, examples & guides.</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >FAQ</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>AssAnswers to common questions.</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Help & Support</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>Guides, articles & more</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Governance</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>AsseThe Aave governance forum.</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/services/smart-contracts" className="flex flex-1"  >
                                            <Stack minWidth={200} className="h-full" height={"100%"} gap={1.5} sx={{
                                                backgroundColor: theme.palette.brand.napulETHBlue1.main,
                                                borderRadius: 2,
                                                padding: 1,
                                                display: "flex",
                                                flex: 1,
                                                flexGrow: 1,
                                            }}>

                                            </Stack>
                                        </NavigationMenuContentItem>
                                    </Stack>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="nav-pill">
                                    <Typography component={"span"} variant="subtitle1" fontWeight={600} color={theme.palette.text.primary} sx={{
                                        whiteSpace: "nowrap"
                                    }}>
                                        Developers
                                    </Typography>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Stack direction={"row"} alignItems={"stretch"} gap={0.75}>
                                        <NavigationMenuContentItem href="/services/smart-contracts" className="flex flex-1 p-0"  >
                                            <Stack minWidth={340} className="h-full" height={"100%"} gap={1.5} sx={{
                                                borderRadius: 2,
                                                paddingX: 1,
                                                paddingY: 1.5,
                                                display: "flex",
                                                flex: 1,
                                                flexGrow: 1,
                                                gap: 2,
                                            }}>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Build</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>Integrate Aave.</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Documentation</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>Technical guides for developers.</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Security</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>Audit reports & information.</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"} alignItems={"center"} gap={1.5}>
                                                    <Stack height={40} width={40} sx={{
                                                        backgroundColor: theme.palette.brand.napulETHGrey1.main,
                                                        borderRadius: 1,
                                                    }}>
                                                    </Stack>
                                                    <Stack gap={0.5}>
                                                        <Typography component="span" variant="subtitle1" fontWeight={600} lineHeight={1.2} >Bug Bounty</Typography>
                                                        <Typography component="span" variant="body2" lineHeight={1.2} color={theme.palette.text.secondary}>Report responsobly and get rewarded.</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </NavigationMenuContentItem>
                                        <NavigationMenuContentItem href="/services/smart-contracts" className="flex flex-1"  >
                                            <Stack minWidth={200} className="h-full" height={"100%"} gap={1.5} sx={{
                                                backgroundColor: theme.palette.brand.napulETHPurple1.main,
                                                borderRadius: 2,
                                                padding: 1,
                                                display: "flex",
                                                flex: 1,
                                                flexGrow: 1,
                                            }}>

                                            </Stack>
                                        </NavigationMenuContentItem>
                                    </Stack>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Button variant="contained" color="primary" sx={{
                            borderRadius: "10rem",
                            backgroundColor: theme.palette.primary.main,
                            textTransform: "none",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: theme.palette.brand.napulETHGrey3.main,
                                boxShadow: "none",
                            }
                        }}>
                            <Typography component={"span"} variant="subtitle2" fontWeight={500} color={theme.palette.background.default}>
                                Open App
                            </Typography>
                        </Button>
                        <IconButton sx={{
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "50%",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: theme.palette.brand.napulETHGrey3.main,
                                boxShadow: "none",
                            }
                        }}>
                            <FiSearch color={theme.palette.background.default} size={18} />
                        </IconButton>
                    </Stack>
                </Stack>


            </div>
        </header>
    );
}
