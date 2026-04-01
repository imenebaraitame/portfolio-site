import { ExternalLink} from "lucide-react";
import {
  FaGithub
} from "react-icons/fa";


export function ProjectCard({ project, featured = false }) {
    return (
        <div
            className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 bg-[rgba(255,255,255,0.03)] boder border-[rgba(255,255,255,0.06)]
            hover:border-[rgba(255,255,255,0.06)] hover:bg-[(255,255,255,0.03)]"
        >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: featured ? "220px" : "180px" }}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                    className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(10,8,15,0.75)" }}
                >
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
                        style={{
                            background: "linear-gradient(135deg, #c084fc, #9333ea)",
                            color: "#ffffff",
                            fontWeight: 600,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "#e8e8f0",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaGithub className="w-4 h-4" />
                        Code
                    </a>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                    <span
                        className="px-2 py-1 rounded-md text-xs"
                        style={{
                            background: "rgba(192,132,252,0.15)",
                            border: "1px solid rgba(192,132,252,0.25)",
                            color: "#c084fc",
                            fontWeight: 500,
                        }}
                    >
                        {project.category}
                    </span>
                </div>
                {/* Year */}
                <div className="absolute top-3 right-3">
                    <span
                        className="px-2 py-1 rounded-md text-xs"
                        style={{
                            background: "rgba(0,0,0,0.5)",
                            color: "#6a6a8a",
                        }}
                    >
                        {project.year}
                    </span>
                </div>
            </div >

            {/* Content */}
            <div div className="flex flex-col flex-1 p-5" >
                <h3
                    className="mb-2 transition-colors duration-200 group-hover:text-[#c084fc]"
                    style={{ color: "#e8e8f0", fontSize: "1.05rem", fontWeight: 600 }}
                >
                    {project.title}
                </h3>
                <p className="text-sm flex-1 mb-4" style={{ color: "#6a6a8a", lineHeight: "1.6" }}>
                    {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 rounded-md text-xs"
                            style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                color: "#7a7a9a",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div >
    );
}