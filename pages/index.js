import PageLayout from "@/components/PageLayout";
import fsPromises from "fs/promises";
import path from "path";
import Links from "@/components/Links";

export default function Home(props) {
	const items = props.materials;
	console.log(items[0]);

	return (
		<PageLayout>
			<section>
				<div className="container">
					<h1 className="text-center">Monster Hunter Sunbreak</h1>
					<h2 className="text-theme-yellow ">Afflicted Materials</h2>
					<ul>
						{items.map((item, key) => (
							<li key={key}>
								<div>
									<img
										src={item.icon}
										alt=""
									/>
								</div>
								<p>{item.name}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</PageLayout>
	);
}

// Fetching data from the JSON file
export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "afflicated-materials.json");
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);

	return {
		props: objectData,
	};
}
