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
        <animated.div
            className="h-fit w-full flex flex-col rounded-xl bg-white/10 backdrop-blur-lg md:h-36 md:flex-row"
            style={style}
        >
            <div className="h-24 min-w-36 w-full rounded-t-xl bg-red md:h-36 md:w-36 md:rounded-l-xl md:rounded-tr-0" />
            <div className="flex flex-col justify-center gap-1 px-4 py-2 md:py-0">
                <span className="text-base font-bold text-text-primary md:text-xl">{name}</span>
                <span className="text-sm leading-tight text-text-secondary md:text-base">
                    {mapToLines(description)}
                </span>
            </div>
        </animated.div>
    );
}

export const EventTreeCardFlexWrapper: FC<{
    event: Event;
    style: Props["style"];
}> = ({ event, style }) => {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-lg font-bold text-text-primary">
                {getFancyDate(event.startingDate)}
            </span>
            <EventTreeCard
                name={event.name}
                imageURL={event.imageURL}
                description={event.description}
                style={style}
            />
        </div>
    );
};
export const EventTreeCardGridWrapper: FC<{
    event: Event;
    isEven: boolean;
    style: Props["style"];
}> = ({ event, isEven, style }) => {
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
