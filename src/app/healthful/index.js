import React from "react";
import { orange } from "../../utils";
import {
    Main,
    VariableHeightSection,
    Text,
    SectionHeader,
    SectionSubHeader,
    ContentContainer,
    IconInfoItemContainer,
    ContentImage,
} from "../_shared";
import { IconInfoItem } from "../_shared/IconInfoItem";
import ScrollAnimation from "react-animate-on-scroll";

export const Healthful = () => {
    return (
        <Main>
            <VariableHeightSection first={true}>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Be Healthy</SectionHeader>
                        <ContentImage
                            src="https://idylworld-static.sgp1.digitaloceanspaces.com/idylworld-healthful.jpg"
                            alt="idylworld healthful"
                            style={{ marginTop: "0px" }}
                        />

                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
            {/* <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <SectionHeader color={orange}>Times Of India</SectionHeader>
                        <Text>As per this <a href="https://epaper.timesgroup.com/olive/apa/timesofindia/SharedView.Article.aspx?href=TOIM%2F2020%2F06%2F04&id=Ar00614&sk=00852CF9&viewMode=image">Times of India article</a>, </Text>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection> */}
            <VariableHeightSection>
                <ContentContainer>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <IconInfoItemContainer>
                            <IconInfoItem color="orange" title="fresh & pure air" width="350px" imageName="air">
                                Since there is no major metro between Idylworld & the ocean, the wind mostly comes from the west, blowing across virgin forests, ensuring a pure & oxygenated breathing environment. Also, over 7000 acres of reserved afforestation zones around the Idylworld translate into a lower density of development & purer air.
                            </IconInfoItem>
                            <IconInfoItem color="brown" title="rich soil" width="350px" imageName="farm">
                                Practically everything can grow here, since the soil is rich, unadulterated by chemicals and made richer by composting.
                            </IconInfoItem>
                            <IconInfoItem color="orange" title="yoga & meditation" width="350px" imageName="unite">
                                Idylworld is the perfect place to unite body, mind and spirit. Its quiet serenity is the ideal environment to nurture your yoga and meditation practices.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="nature walks & hikes" width="350px" imageName="hike">
                                Hike all day long at Idylworld with over 30 kms.of roads, trails & pathways. Jog at Idylworld Sports Village with breeze caressing your face & eyes feasting on beautiful views.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="fitness trail" width="350px" imageName="jog">
                                Swiss style fitness trails (called Vitaparcours) are interspersed with exercise stations across Idylworld. The Vitaparcour circuits feature different strength, endurance & flexibility exercises.
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="play sport" width="350px" imageName="play">
                                Playing a sport enhances all other positive aspects of your life. Any sport at any intensity level…. Just play!!!
                            </IconInfoItem>
                            <IconInfoItem color="yellow" title="like minded community" width="350px" imageName="xchange">
                                Idylworld values bringing together like-minded nature lovers who are passionate about sustainability, organic farming, the environment & physical health.
                            </IconInfoItem>
                            <IconInfoItem width="350px" />
                        </IconInfoItemContainer>
                    </ScrollAnimation>
                </ContentContainer>
            </VariableHeightSection>
        </Main >
    );
};
