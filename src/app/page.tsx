import { Stack } from "@mui/material";

import Hero from "@/sections/home/hero";
import Newsletter from "@/sections/home/newsletter";
import Testimonials from "@/sections/home/testimonials";
import MeetAave from "@/sections/home/meetAave";
import WhyChooseAave from "@/sections/home/whyChooseAave";
import YourMoney from "@/sections/home/yourMoney";

export default function Home() {

  return (
    <Stack width={"100%"} minHeight={"100vh"} alignItems={"center"} gap={10}>
      <Hero />
      <Newsletter />
      <Testimonials />
      <MeetAave />
      <WhyChooseAave />
      <YourMoney />
      <Stack width={"100%"} height={"100vh"} />
    </Stack>
  );
}
