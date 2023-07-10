import PageLayout from "@/components/PageLayout";
import client from "apollo-client";
import { HOME_QUERY } from "@/lib/queries";
import Link from "next/link";
import bg from "/public/images/banner-bg.jpg";
import Image from "next/image";
import TheCouple from "/public/images/me.jpg";
import flowerTop from "/public/images/flower-top.png";
import flowerBottom from "/public/images/flower-bottom.png";
import image3 from "/public/images/image-1.jpg";
import image2 from "/public/images/image-2.jpg";
import image1 from "/public/images/image-3.jpg";
import image4 from "/public/images/image-4.jpg";

import Links from "@/components/Links";

const gallery = [image1, image2, image3, image4];

const bannerStyling = {
	background: `linear-gradient(90deg, rgba(136,155,174,0.9) 0%, rgba(136,155,174,0.9) 100%), url('${bg.src}')`,
	backgroundSize: "cover",
};

export default function Home() {
	return (
		<PageLayout>
			<section>
				<div className="container"></div>
			</section>
		</PageLayout>
	);
}
