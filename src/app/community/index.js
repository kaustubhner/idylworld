import React from "react";
import { green, yellow } from "../../utils";
import {
    Main,
    VariableHeightSection,
    SectionHeader,
    ContentContainer,
    FullscreenSection,
    Text,
    ContentImage,
    IconInfoItemContainer,
} from "../_shared";
import ScrollAnimation from "react-animate-on-scroll";
import "video-react/dist/video-react.css";
import { IconInfoItem } from "../_shared/IconInfoItem";
export const Community = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={yellow}>Belong to a Hill Community</SectionHeader>
                        <ContentImage
                            src="https://idylworld-static.sgp1.digitaloceanspaces.com/master%20plan%20satellite.png"
                            alt="idylworld community"
                            style={{ marginTop: "0px" }}
                        />
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <IconInfoItemContainer>
                            <IconInfoItem
                                color="blue"
                                title="invest wisely"
                                width="350px"
                                imageName="invest"
                            >
                                You invest intelligently, you benefit personally, but when you invest wisely & ethically
                                the whole world benefits. Investment in a genuinely eco friendly, ethical & socially
                                conscious community like Idylworld will help the community and additionally help change
                                the narrative and trend towards taking care of the environment, which is needed most
                                urgently.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="become an influencer" width="350px" imageName="become-an-influencer">
                                Be COOL, be a part of Idylworld. Reduce waste, Re-use what you can & Recycle. Host
                                outdoor events, Celebrate festivals.
                            </IconInfoItem>
                            <IconInfoItem
                                color="yellow"
                                title="build an active community"
                                width="350px"
                                imageName="xchange"
                            >
                                At Idylworld, we strongly encourage vibrant, healthful, active and energised living. We
                                are sincerely committed to building a community of forward thinking,active individuals
                                with growth-mindset. A premium value is put on exchange of ideas & knowledge, to inspire
                                & get inspired.
                            </IconInfoItem>
                            <IconInfoItem
                                color="green"
                                title="drinking fountains around the community"
                                width="350px"
                                imageName="quench"
                            >
                                To reduce single-use plastic bottles and provide clean water to residents, Idylworld has
                                committed to make drinking water outlets a part of infrastructure plan, no matter what
                                cost and effort are involved.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="night hike safely" width="350px" imageName="gaze">
                                Idylworld has closely worked with botanists, outdoor explorers and locals to create a
                                safe bubble where humans & flora/fauna can coexist & explore unadulterated nature.
                            </IconInfoItem>
                            <IconInfoItem
                                color="brown"
                                title="play sports"
                                width="350px"
                                imageName="play"
                            >
                                Idylworld Sports Village will provide the indoor/outdoor space/facility to play active
                                sports at professional or amateur level. For the fitness freak, there are tons of
                                hike/trek/run/jog possibilities. Idylworld has perfect spots for group meditation
                                sessions.
                            </IconInfoItem>
                            <IconInfoItem color="green" title="perform arts" width="350px" imageName="perform-art">
                                Idylworld Arts Village will provide the platform to the enthusiasts interested in
                                exploring arts to have fun & experience therapeutic benefits of different modes of
                                expression.
                            </IconInfoItem>
                            <IconInfoItem color="blue" title="share fresh produce" width="350px" imageName="share">
                                Sharing is caring. Spread genuine kinship with your neighbors by sharing organically
                                grown fresh produce.
                            </IconInfoItem>
                            <IconInfoItem
                                color="green"
                                title="pray at community temple"
                                width="350px"
                                imageName="pray-at-community-temple"
                            >
                                Masoba Temple at Idylworld is a ___ years old temple attracting hundreds of devotees
                                year around. A communal place for satsang on festivals and special occasions.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="pathways & trails" width="350px" imageName="hike">
                                At Idylworld, we have planned and paved pathways to make zipping across the community
                                easy & fun even when the community is populated.
                            </IconInfoItem>
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main>
    );
};
