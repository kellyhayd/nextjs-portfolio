import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Vimeo from '@u-wave/react-vimeo';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

<><title>Modal</title><script defer src="script.js"></script></>

const ProjectCard = ({ imgUrl, title, description, details, videoID }) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
					 <Popup
							trigger={<button className="button"> <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> </button>}
							modal
							position="center"
							enableResize="true"
						>
							{close => (
								<div className="modal">
									<button className="close" onClick={close}>
										&times;
									</button>
									<div className="header"> {title} </div>
									<div className="content">
										<Vimeo video={videoID}
										style={{ padding: "5% 5% 5% 5%", position: "relative"}}
										width={"100%"}
										height={"100%"}/>
									</div>
									<div className="text-gray rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
										<p className="details">{details.split("\n").map((line) => (
											<span>{line}<br /></span>
										))}</p>
									</div>
								</div>
							)}
						</Popup>
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-[#ADB7BE]">{description.split("\n").map((line) => (
					<span>{line}<br /></span>
				))}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
