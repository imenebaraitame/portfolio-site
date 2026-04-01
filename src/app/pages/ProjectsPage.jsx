import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects, categories } from "../data/projects";

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-sm tracking-widest uppercase" style={{ color: "#c084fc" }}>
            My Work
          </span>
          <h1
            className="mt-2 mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#e8e8f0",
            }}
          >
            All Projects
          </h1>
          <p style={{ color: "#5a5a7a", maxWidth: "480px", margin: "0 auto", lineHeight: "1.8" }}>
            A collection of projects I've built — from full-stack web apps to UI experiments and
            tools.
          </p>
        </motion.div>
         {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-between"
        >
          {/* Category Tabs */}
          <div
            className="flex flex-wrap gap-2 p-1 rounded-xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-lg text-sm transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "rgba(192,132,252,0.15)" : "transparent",
                  color: activeCategory === cat ? "#c084fc" : "#6a6a8a",
                  border: activeCategory === cat ? "1px solid rgba(192,132,252,0.25)" : "1px solid transparent",
                  fontWeight: activeCategory === cat ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-56">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "#4a4a6a" }}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#c0c0d8",
              }}
              onFocus={(e) => {
                (e.currentTarget).style.borderColor = "rgba(192,132,252,0.3)";
              }}
              onBlur={(e) => {
                (e.currentTarget).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            />
          </div>
        </motion.div>

        {/* Count */}
        <p className="mb-6 text-sm" style={{ color: "#4a4a6a" }}>
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <AnimatePresence mode="sync">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p style={{ color: "#4a4a6a" }}>No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-sm"
                style={{ color: "#c084fc" }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
           
      </div>
    </div>
  )
}

export default ProjectsPage