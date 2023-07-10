import menuImage from "/public/images/menu.jpg";
import AcommodationImage from "/public/images/accommodation.jpg";
import GiftImage from "/public/images/gifts.jpg";
import LocationImage from "/public/images/location.jpg";
import EveningImage from "/public/images/pendrall-at-night.jpg";
import TheDay from "/public/images/the-day.jpg";

import Link from "next/link";
import Image from "next/image";

const siteLinks = [
	{
		title: "Accommodation",
		pageLink: "/accommodation",
		linkImage: AcommodationImage,
	},
	{
		title: "Menu",
		pageLink: "/menu",
		linkImage: menuImage,
	},
	{
		title: "Location",
		pageLink: "/location",
		linkImage: LocationImage,
	},
	{
		title: "Gifts",
		pageLink: "/gifts",
		linkImage: GiftImage,
	},
	{
		title: "The Day",
		pageLink: "/the-day",
		linkImage: TheDay,
	},
	{
		title: "Evening Guests",
		pageLink: "/evening-guests",
		linkImage: EveningImage,
	},
];

export default function Links() {
	return (
		<>
			<h1 className="text-center mb-[3rem] small:mb-[5rem]">Guest Information</h1>

			<div className="max-w-[75rem] w-full mx-auto px-[2rem] mb-[3rem]">
				<div className="font-label px-[2rem] text-center bg-theme-dusty_blue text-white rounded-[1rem] p-[3rem]">
					<h2 className="font-label font-bold text-[2.5rem] mb-[1rem]">Changing Rooms</h2>
					<p className="">Pendrell Hall have two Changing Rooms available from 12 Noon on the wedding day, which guests are very welcome to use.</p>

					<p>Located within The Orchard Stables, they’re a great option if you’d like to get your glad rags on prior to your specified bedroom check-in time.</p>

					<p>Check-in times vary, guests are advised to refer to their Booking Confirmation email for clarification of the check-in time.</p>

					<h2 className="font-label font-bold text-[2.5rem] mt-[3rem] [mb-[1rem]">Children</h2>
					<p className="">We hope you will inderstand that our decision to make our wedding children-free, and take the oppertunity to let your hair down and selebrate in style.</p>

					<h2 className="font-label font-bold text-[2.5rem] mt-[3rem] mb-[1rem]">Dresscode</h2>
					<p className="">Cocktail</p>
				</div>
			</div>

			<div className="links w-full max-w-[110rem] mx-auto px-[2rem] relative z-[2]">
				{siteLinks.map((item, key) => (
					<Link key={key} className="link relative overflow-hidden" href={item.pageLink}>
						<Image className="w-full block" src={item.linkImage} />
						<div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-full bg-black py-[1.4rem] px-[1rem] bg-opacity-[0.6]">
							<span className="block text-center text-white text-[2.2rem] opacity-100">{item.title}</span>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
