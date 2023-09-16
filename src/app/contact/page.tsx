import ContactCard from "@/components/cards/ContactCard";
import HeroLayout from "@/components/hero/HeroLayout";
import { FC } from "react";

const ContactUs = () => {
    return (
        <div className="z-20 flex flex-col containerify">
            <Hero />
        </div>
    );
};

export default ContactUs;

const Hero: FC = () => {
    return (
        <div
            className="relative grid grid-cols-2 items-center"
            style={{ height: "calc(100vh - 8rem)" }}
        >
            <HeroLayout
                title="Contact us"
                subtitle={["Any questions or remarks? Don’t hesitate to contact us."]}
            >
                <div className="flex flex-col gap-5">
                    <ContactCard icon="i-mdi-location">
                        Informatics Institute of Technology, 57, Ramakrishna Road, Colombo 06.
                    </ContactCard>
                    <ContactCard icon="i-mdi-phone">
                        +94 (71) 826 0469
                        <br /> +94 (76) 195 5252
                    </ContactCard>
                    <ContactCard icon="i-mdi-email-outline">mozillaclub@iit.ac.lk</ContactCard>
                </div>
            </HeroLayout>

            <div>
                <ContactCard icon="i-mdi-location">
                    Informatics Institute of Technology, 57, Ramakrishna Road, Colombo 06.
                </ContactCard>
                <ContactCard icon="i-mdi-phone">
                    +94 (71) 826 0469
                    <br /> +94 (76) 195 5252
                </ContactCard>
                <ContactCard icon="i-mdi-email-outline">mozillaclub@iit.ac.lk</ContactCard>
            </div>
        </div>
    );
};

const ContactForm = () => {};
