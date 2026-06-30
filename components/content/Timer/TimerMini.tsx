"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { Time } from "@/hooks/useTime";


const TimerMini = ({
	dark,
	boxClassName
}: {
	dark?: boolean;
	boxClassName?: string;
}) => {

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const [isEventHappening, setIsEventHappening] = useState(false);
	const [isEventOver, setIsEventOver] = useState(false);


	useEffect(() => {

		const updateTime = () => {

			const time = new Time();

			setDays(time.days);
			setHours(time.hours);
			setMinutes(time.minutes);
			setSeconds(time.seconds);

			setIsEventHappening(
				time.isEventHappening()
			);

			setIsEventOver(
				time.isEventOver()
			);

		};


		updateTime();

		const interval = setInterval(
			updateTime,
			1000
		);


		return () => clearInterval(interval);


	}, []);



	if (isEventOver) return null;



	if (isEventHappening) {

		return (

			<div
				className={clsx(
					"px-3 py-1.5 rounded-full text-xs font-semibold",
					dark
						? "bg-white/10 text-white"
						: "bg-black/5",
					boxClassName
				)}
			>
				Event Live
			</div>

		);

	}



	const boxes = [
		{
			value: days,
			label: "D"
		},
		{
			value: hours,
			label: "H"
		},
		{
			value: minutes,
			label: "M"
		},
		{
			value: seconds,
			label: "S"
		}
	];



	return (

		<div className="flex items-center gap-1.5">


			{boxes.map((item) => (

				<div

					key={item.label}

					className={clsx(

						"flex items-center gap-1",

						"px-2.5 py-1.5",

						"rounded-full",

						"bg-black/5",

						dark && "bg-white/10 text-white",

						boxClassName

					)}

				>

					<span className="
						font-mono
						text-sm
						font-semibold
					">

						{item.value < 10
							? `0${item.value}`
							: item.value}

					</span>


					<span className="
						text-sm
						uppercase
						opacity-80
					">

						{item.label}

					</span>


				</div>

			))}


		</div>

	);

};


export default TimerMini;