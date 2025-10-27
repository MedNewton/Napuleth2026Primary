import { Stack } from "@mui/material";

import Hero from "@/sections/home/hero";
import Newsletter from "@/sections/home/newsletter";

export default function Home() {

  return (
    <Stack width={"100%"} minHeight={"100vh"} alignItems={"center"} gap={10}>
      <Hero />
      <Newsletter />
    </Stack>
  );
}
