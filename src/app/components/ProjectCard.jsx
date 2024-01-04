import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

<><title>Modal</title><script defer src="script.js"></script></>

const ProjectCard = ({ imgUrl, title, description, vimeoUrl, previewUrl }) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
					{/*link sem destino*/}
					{/* <Link
						href={previewUrl}
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</Link> */}
					{/* <button data-modal-target="#modal"> 
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</button>
					<div class="modal" id="modal">
						<div class="modal-header">
							<div class="title">Var-Título</div>
							<button data-close-button class="close-button">&times;</button>
						</div>
						<div class="modal-body">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Possimus iure rerum quidem fugiat beatae porro harum magni sint
							id obcaecati reprehenderit hic mollitia illo, et at similique adipisci fugit vitae!
						</div>
					</div>
					<div class="active" id="overlay"></div> */}
					 <Popup
							trigger={<button className="button"> <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> </button>}
							modal
						>
							{close => (
								<div className="modal">
									<button className="close" onClick={close}>
										&times;
									</button>
									<div className="header"> Modal Title </div>
									<div className="content">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto officia cumque, voluptatum eius
										asperiores iure, earum optio facilis quasi nihil ab consequatur sint dolorum minima laboriosam, 
										in dolore vero natus totam excepturi! Sed a accusamus qui ipsa cupiditate ipsam!
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
