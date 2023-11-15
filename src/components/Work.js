import React from "react";
import Commsimg from "../assets/Commsimg.png";
import EcohubExample from "../assets/ecohub-example.png";
import Cryptoverseimg from '../assets/Cryptoverseimg.png';

import "./Work.css";

const ownProjects = [
	{
		name: "Ecohub",
		img_link: EcohubExample,
		git_link: "https://github.com/NikhilChava2212/Eco-hub",
		display_link: "https://ecohub-mern.vercel.app/",
	},
	{
		name: "Cryptoverse",
		img_link: Cryptoverseimg,
		git_link: "https://github.com/NikhilChava2212/cryptoversse",
		display_link: "https://cryptoverse-simple.netlify.app/",
	},
	{
		name: "ehub",
		img_link: Commsimg,
		git_link: "https://github.com/NikhilChava2212/E-clinic",
		display_link: "https://eclinic-5s3f.onrender.com/",
	},
	
];


const allProjects = ownProjects.map((project) => {
	return (
		<div class="flex justify-center">
			<figure class="snip1193">
				<img src={project.img_link} alt="sample31" />
				<figcaption>
					<div>
						<h4 className="opacity-100">{project.name}</h4>
					</div>
					<a
						href={project.git_link}
						class="bottom-left"
						target="__blank">
						<i class="ion-social-github"></i>
					</a>
					<a
						href={project.display_link}
						class="bottom-right"
						target="__blank">
						<i class="ion-android-bulb"></i>
					</a>
				</figcaption>
			</figure>
		</div>
	);
});


const Work = () => {
	return (
		<div className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
		name="work" id="work">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<p className="text-4xl font-bold inline border-b-4 border-pink-600">
					Work.
				</p>
				<p className="pt-8">Checkout some of my previous work.</p>{" "}
				<br></br>
				<div class="container mx-auto">
					<div class="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
						{allProjects}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
