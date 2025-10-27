import { Stack } from "@mui/material";

import Hero from "@/sections/home/hero";

export default function Home() {

  return (
    <Stack width={"100%"} minHeight={"100vh"} alignItems={"center"} gap={2}>
      <Hero />
    </Stack>
  );
}
