import PageLayout from "@/components/PageLayout";
import fsPromises from "fs/promises";
import path from "path";
import Links from "@/components/Links";

export default function Home(props) {
    const items = props.materials;

    return (
        <PageLayout>
            <section className="py-[6rem]">
                <div className="container p-[2rem]">
                    <h1 className="text-center mb-[5rem]">Monster Hunter Sunbreak</h1>
                    <h2 className="text-theme-yellow mb-[3rem]">Afflicted Materials</h2>

                    <from className="mb-[2rem] w-full flex items-center">
                        <input
                            type="text"
                            placeholder="Enter Material Name"
                            className="w-full h-[5rem] border-[0.2rem] border-theme-green text-[1.8rem] px-[2rem]"
                        ></input>
                        <button
                            type="submit"
                            className="w-[5rem] h-[5rem] bg-theme-green flex items-center justify-center"
                        >
                            <svg
                                className="w-[3rem] h-auto"
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                            >
                                <path
                                    fill="none"
                                    d="M0 0h50v50H0z"
                                />
                                <circle
                                    cx="21"
                                    cy="20"
                                    r="16"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                />
                                <path
                                    fill="none"
                                    stroke="#fff"
                                    stroke-miterlimit="10"
                                    stroke-width="4"
                                    d="M32.229 32.229 45.5 45.5"
                                />
                            </svg>
                        </button>
                    </from>

                    <ul className="grid grid-cols-1 small:grid-cols-2 small_ls:grid-cols-3 gap-[2rem] grid-auto-rows-[20rem]">
                        {items.map((item, key) => (
                            <li
                                key={key}
                                className="p-[3rem] pt-[4rem] shadow-md"
                            >
                                <div className="flex items-center gap-[1rem] mb-[2rem] relative">
                                    {item?.level && <span className="absolute top-[-4rem] right-[-3rem] bg-theme-red text-white font-bold px-[1rem] py-[0.5rem]">{item.level}</span>}
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="max-w-[3rem]"
                                    />
                                    <p className="m-0 font-bold">{item.name}</p>
                                </div>

                                <ul className="flex gap-[1rem] flex-wrap">
                                    {item.monsters.map((monster, key) => (
                                        <li className="flex flex-col">
                                            <img
                                                src={monster.icon}
                                                alt=""
                                                className="max-w-[5rem] w-full "
                                                title={monster.name}
                                            />
                                        </li>
                                    ))}
                                </ul>
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
