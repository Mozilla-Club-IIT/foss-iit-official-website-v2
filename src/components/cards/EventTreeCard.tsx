"use client";

import clsx from "clsx";
import type { FC } from "react";
import { type SpringValue, animated } from "@react-spring/web";

import type { Event } from "@/types/internal";
import { getFancyDate } from "@/utils/date";
import { mapToLines } from "@/utils/react/shared";

type Props = Omit<Event, "startingDate"> & {
    style: {
        opacity: SpringValue<number>;
    };
};

export default function EventTreeCard({ name, description, style }: Props) {
    return (
        <animated.div className="h-36 w-full flex rounded-xl bg-white/10" style={style}>
            <div className="h-36 min-w-36 w-36 rounded-l-xl bg-red" />
            <div className="flex flex-col justify-center gap-1 px-4">
                <span className="text-xl font-bold text-text-primary">{name}</span>
                <span className="leading-tight text-text-secondary">{mapToLines(description)}</span>
            </div>
        </animated.div>
    );
}

export const EventTreeCardWrapper: FC<{ event: Event; isEven: boolean; style: Props["style"] }> = ({
    event,
    isEven,
    style,
}) => {
    const elements = [
        <EventTreeCard
            key="card"
            name={event.name}
            imageURL={event.imageURL}
            description={event.description}
            style={style}
        />,
        <span
            key="label"
            className={clsx("text-xl text-text-primary font-bold", { "text-right": isEven })}
        >
            {getFancyDate(event.startingDate)}
        </span>,
    ];

    /**
     * NOTE(Curstantine):
     *  How cursed is this even? We can probably just reverse the layout using some div wrapper in grids,
     *  but reversing the element would be so much cleaner, lel.
     */
    return isEven ? elements.reverse() : elements;
};
