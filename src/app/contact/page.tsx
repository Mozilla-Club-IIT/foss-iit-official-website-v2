import { FC } from "react";

import { FACEBOOK, INSTAGRAM, LINKEDIN, TIKTOK } from "@/constants/links";

import SocialLink from "@/components/buttons/SocialLink";
import ContactCard from "@/components/cards/ContactCard";
import DenseInput from "@/components/forms/DenseInput";
import DenseTextArea from "@/components/forms/DenseTextArea";

export default function Contact() {
    return (
        <div
            className="z-20 grid items-center justify-center lg:grid-cols-2"
            style={{ minHeight: "calc(100vh - 6rem)" }}
        >
            <Hero />
            <Form />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex flex-col justify-center gap-2 md:gap-0">
            <h1 className="mt-8 text-3xl leading-tight uppercase text-text-neutral md:text-5xl">
                Contact us
            </h1>
            <span className="mt-4 text-base font-medium font-italic md:text-lg">
                Any questions or remarks? Don’t hesitate to contact us.
            </span>

            <div className="mt-8 flex flex-col gap-5">
                <ContactCard
                    icon="i-mdi-location"
                    label="Informatics Institute of Technology, 57, Ramakrishna Road, Colombo 06."
                />
                <ContactCard
                    icon="i-mdi-phone"
                    label={["+94 (71) 826 0469", "+94 (76) 195 5252"]}
                />
                <ContactCard icon="i-mdi-email-outline" label="mozillaclub@iit.ac.lk" />
            </div>

            <p className="mt-8 capitalize">Connect with us</p>
            <div className="mt-2 w-full flex gap-2">
                <SocialLink type="facebook" href={FACEBOOK} />
                <SocialLink type="tiktok" href={TIKTOK} />
                <SocialLink type="linkedin" href={LINKEDIN} />
                <SocialLink type="instagram" href={INSTAGRAM} />
            </div>
        </div>
    );
};

const Form = () => {
    return (
        <div className="my-10 flex flex-col gap-4 border-2 border-border-separator/50 rounded-2xl p-4 md:mx-12">
            <DenseInput
                name="name"
                type="text"
                placeholder="Your Name"
                icon="i-mdi-person-outline"
            />
            <DenseInput
                name="email"
                type="email"
                placeholder="someone@gmail.com"
                icon="i-mdi-email-outline"
            />
            <DenseInput
                name="phone"
                type="phone"
                placeholder="+94 223 133 321"
                icon="i-mdi-phone"
            />
            <DenseTextArea name="content" placeholder="Content" icon="i-mdi-sms" />

            <button className="relative h-8 w-full inline-flex items-center justify-center font-400 uppercase">
                SUBMIT
                <div className="i-mdi-arrow-top-right absolute right-3 mb-1 ml-1 h-6 w-6" />
            </button>
        </div>
    );
};
