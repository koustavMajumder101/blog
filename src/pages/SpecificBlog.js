import React from "react";
import Navtoolbar from "../components/Navtoolbar";

import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import { Container, Toolbar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const blogData = [
  {
    title: "Social media has changed the world",
    content: `In little more than a decade, the impact of social media has gone from being an entertaining extra to a fully integrated part of nearly every aspect of daily life for many.

    Recently in the realm of commerce, Facebook faced skepticism in its testimony to the Senate Banking Committee on Libra, its proposed cryptocurrency and alternative financial system. In politics, heartthrob Justin Bieber tweeted the President of the United States, imploring him to “let those kids out of cages.” In law enforcement, the Philadelphia police department moved to terminate more than a dozen police officers after their racist comments on social media were revealed.
    
    And in the ultimate meshing of the digital and physical worlds, Elon Musk raised the specter of essentially removing the space between social and media through the invention — at some future time — of a brain implant that connects human tissue to computer chips.
    
    All this, in the span of about a week.
    
    As quickly as social media has insinuated itself into politics, the workplace, home life, and elsewhere, it continues to evolve at lightning speed, making it tricky to predict which way it will morph next. It’s hard to recall now, but SixDegrees.com, Friendster, and Makeoutclub.com were each once the next big thing, while one survivor has continued to grow in astonishing ways. In 2006, Facebook had 7.3 million registered users and reportedly turned down a $750 million buyout offer. In the first quarter of 2019, the company could claim 2.38 billion active users, with a market capitalization hovering around half a trillion dollars.
    
    “In 2007 I argued that Facebook might not be around in 15 years. I’m clearly wrong, but it is interesting to see how things have changed,” says Jonah Berger, Wharton marketing professor and author of Contagious: Why Things Catch On. The challenge going forward is not just having the best features, but staying relevant, he says. “Social media isn’t a utility. It’s not like power or water where all people care about is whether it works. Young people care about what using one platform or another says about them. It’s not cool to use the same site as your parents and grandparents, so they’re always looking for the hot new thing.”
    
    Just a dozen years ago, everyone was talking about a different set of social networking services, “and I don’t think anyone quite expected Facebook to become so huge and so dominant,” says Kevin Werbach, Wharton professor of legal studies and business ethics. “At that point, this was an interesting discussion about tech start-ups.
    
    “Today, Facebook is one of the most valuable companies on earth and front and center in a whole range of public policy debates, so the scope of issues we’re thinking about with social media are broader than then,” Werbach adds.
    
    Cambridge Analytica, the impact of social media on the last presidential election and other issues may have eroded public trust, Werbach said, but “social media has become really fundamental to the way that billions of people get information about the world and connect with each other, which raises the stakes enormously.”`,
  },
  {
    title: "Chernobyl",
    content: `Critics of nuclear energy worry that the storage facilities for radioactive waste will leak, crack, or erode. Radioactive material could then contaminate the soil and groundwater near the facility. This could lead to serious health problems for the people and organisms in the area. All communities would have to be evacuated.

        This is what happened in Chernobyl, Ukraine, in 1986. A steam explosion at one of the power plants four nuclear reactors caused a fire, called a plume. This plume was highly radioactive, creating a cloud of radioactive particles that fell to the ground, called fallout. The fallout spread over the Chernobyl facility, as well as the surrounding area. The fallout drifted with the wind, and the particles entered the water cycle as rain. Radioactivity traced to Chernobyl fell as rain over Scotland and Ireland. Most of the radioactive fallout fell in Belarus.
        
        The environmental impact of the Chernobyl disaster was immediate. For kilometers around the facility, the pine forest dried up and died. The red color of the dead pines earned this area the nickname the Red Forest. Fish from the nearby Pripyat River had so much radioactivity that people could no longer eat them. Cattle and horses in the area died.
        
        More than 100,000 people were relocated after the disaster, but the number of human victims of Chernobyl is difficult to determine. The effects of radiation poisoning only appear after many years. Cancers and other diseases can be very difficult to trace to a single source.`,
  },
  {
    title: "Coherent light scattering from a telecom C-band quantum dot",
    content: `Quantum networks have the potential to transform secure communication via quantum key distribution and enable novel concepts in distributed quantum computing and sensing. Coherent quantum light generation at telecom wavelengths is fundamental for fibre-based network implementations, but Fourier-limited emission and subnatural linewidth photons have so far only been reported from systems operating in the visible to near-infrared wavelength range. Here, we use InAs/InP quantum dots to demonstrate photons with coherence times much longer than the Fourier limit at telecom wavelength via elastic scattering of excitation laser photons. Further, we show that even the inelastically scattered photons have coherence times within the error bars of the Fourier limit. Finally, we make direct use of the minimal attenuation in fibre for these photons by measuring two-photon interference after 25 km of fibre, demonstrating finite interference visibility for photons emitted about 100,000 excitation cycles apart.`,
  },
  {
    title: "World War II",
    content: `World War II, the largest and deadliest conflict in human history, involved more than 50 nations and was fought on land, sea and air in nearly every part of the world. Also known as the Second World War, it was caused in part by the economic crisis of the Great Depression and by political tensions left unresolved following the end of World War I.

    The war began when Nazi Germany invaded Poland in 1939 and raged across the globe until 1945, when Japan surrendered to the United States after atomic bombs were dropped on Hiroshima and Nagasaki. By the end of World War II, an estimated 60 to 80 million people had died, including up to 55 million civilians, and numerous cities in Europe and Asia were reduced to rubble.
    
    Among the people killed were 6 million Jews murdered in Nazi concentration camps as part of Hitler’s diabolical “Final Solution,” now known as the Holocaust. The legacy of the war included the creation of the United Nations as a peacekeeping force and geopolitical rivalries that resulted in the Cold War.`,
  },
  {
    title: "Shinkansen: The Japanese bullet trains",
    content: `Shinkansen bullet trains are the fastest and most convenient way of discovering Japan. The Japan Rail (JR) network is extensive and the trains reach a top speed of 320 km/h (199 mph). This allows you to get to wherever you need in little time.

    The nine Shinkansen lines take you in different directions around Japan. From Tokyo to the south runs the Tokaido Shinkansen line, connecting the capital with Osaka. The Sanyo Shinkansen line connects Osaka with Fukuoka and, from there, the Kyushu Shinkansen line runs through the island of Kyushu from north to south.
    
    The other six lines either take you north or inland from Tokyo. These are the Akita, Hokkaido, Hokuriku, Joetsu, Tokoku, and Yamagata Shinkansen lines. The Hokkaido line takes you the furthest north, all the way to Hokkaido island.`,
  },
  {
    title: "Artificial Intelligence",
    content: `Most people are not very familiar with the concept of artificial intelligence (AI). As an illustration, when 1,500 senior business leaders in the United States in 2017 were asked about AI, only 17 percent said they were familiar with it.1 A number of them were not sure what it was or how it would affect their particular companies. They understood there was considerable potential for altering business processes, but were not clear how AI could be deployed within their own organizations.

    Despite its widespread lack of familiarity, AI is a technology that is transforming every walk of life. It is a wide-ranging tool that enables people to rethink how we integrate information, analyze data, and use the resulting insights to improve decisionmaking. Our hope through this comprehensive overview is to explain AI to an audience of policymakers, opinion leaders, and interested observers, and demonstrate how AI already is altering the world and raising important questions for society, the economy, and governance.
    
    In this paper, we discuss novel applications in finance, national security, health care, criminal justice, transportation, and smart cities, and address issues such as data access problems, algorithmic bias, AI ethics and transparency, and legal liability for AI decisions. We contrast the regulatory approaches of the U.S. and European Union, and close by making a number of recommendations for getting the most out of AI while still protecting important human values.`,
  },
];

function SpecificBlog() {
  const { id } = useParams();
  return (
    <Container>
      <Navtoolbar
        heading={blogData[id].title}
        headingIcon={<AutoAwesomeMosaicIcon sx={{ fontSize: "30px" }} />}
      />
      <Container sx={{ paddingTop: "20px" }}>
        <Typography variant="body2" gutterBottom>
          {blogData[id].content}
        </Typography>
        <Toolbar />
      </Container>
    </Container>
  );
}

export default SpecificBlog;
