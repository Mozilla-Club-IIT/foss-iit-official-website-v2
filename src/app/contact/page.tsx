import SocialLink from "@/components/buttons/SocialLink";
import ContactCard from "@/components/cards/ContactCard";
import { FACEBOOK, INSTAGRAM, LINKEDIN, TWITTER } from "@/constants/links";
import { FC } from "react";
import ContactFormInput from "./ContactFormInput";

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
        <div className="relative px-16" style={{ height: "calc(100vh - 8rem)" }}>
            <div className="grid grid-cols-2">
                <ContactInfo />
                <ContactForm />
            </div>

            <p className="mt-8 capitalize">Connect with us</p>
            <div className="mt-1 w-full flex gap-2">
                <SocialLink type="facebook" href={FACEBOOK} />
                <SocialLink type="twitter" href={TWITTER} />
                <SocialLink type="linkedin" href={LINKEDIN} />
                <SocialLink type="instagram" href={INSTAGRAM} />
            </div>
        </div>
    );
};

const ContactInfo = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-5xl leading-tight uppercase text-text-neutral">Contact us</h1>
            <span className="mt-6 text-lg uppercase font-italic">
                Any questions or remarks? Don’t hesitate to contact us.
            </span>

            <div className="mt-4 flex flex-col gap-5 pr-10">
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

const ContactForm = () => {
    return (
        <div className="mx-12 flex flex-col gap-4 border-2 border-#D7D7D7/60 rounded-2xl p-4">
            <ContactFormInput icon="i-mdi-person-outline" name="name" placeholder="Your Name" />
            <ContactFormInput
                icon="i-mdi-email-outline"
                name="email"
                placeholder="someone@gmail.com"
            />
            <ContactFormInput icon="i-mdi-phone" name="phonenumber" placeholder="+94 223 133 321" />
            <ContactFormInput textarea={true} icon="i-mdi-sms" placeholder="Your Name" />

            <button className="relative h-8 w-full inline-flex items-center justify-center font-400 uppercase">
                SUBMIT
                <div className="i-mdi-arrow-top-right absolute right-3 mb-1 ml-1 h-6 w-6" />
            </button>
        </div>
    );
};
