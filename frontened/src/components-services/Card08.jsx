import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Simple cn utility for className merging
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Default images for different service categories
// const defaultImages = {
//   criminal: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   corporate: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   family: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
//   property: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   cyber: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   default: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
// };

export default function Card08({
  title = "Modern Design Systems",
  subtitle = "Explore the fundamentals of contemporary UI design",
  badge = { icon: null },
  href = "#",
  serviceType = "default",
  image
}) {
  // Get the appropriate image based on service type
  const serviceImage = image || defaultImages[serviceType] || defaultImages.default;

  return (
    <Link to={href} className="block w-full max-w-[280px] group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-white/90 dark:bg-[#0B1926]/90",
          "backdrop-blur-xl",
          "border border-[#E6D8B8]/30 dark:border-[#BC5B44]/20",
          "shadow-xs",
          "transition-all duration-300",
          "hover:shadow-md",
          "hover:border-[#BC5B44]/40 dark:hover:border-[#BC5B44]/30"
        )}
      >
        <div className="relative h-[320px] overflow-hidden">
          <img
            src={serviceImage}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-t from-[#0B1926]/95 via-[#0B1926]/50 to-transparent"
          )}
        />

        <div className="absolute top-3 right-3">
          <div
            className={cn(
              "p-2 rounded-lg",
              "bg-[#BC5B44] text-white",
              "dark:bg-[#BC5B44] dark:text-white",
              "backdrop-blur-md",
              "shadow-xs",
              "border border-[#BC5B44]/20",
              "transition-transform duration-300",
              "group-hover:scale-110"
            )}
          >
            {badge.icon && <badge.icon className="w-8 h-8" />}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold text-white dark:text-white leading-snug tracking-tighter">
                {title}
              </h3>
              <p className="text-sm text-[#E6D8B8] dark:text-[#E6D8B8] line-clamp-2 tracking-tight">
                {subtitle}
              </p>
            </div>
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-[#BC5B44]/20 dark:bg-[#BC5B44]/30",
                "backdrop-blur-md",
                "group-hover:bg-[#BC5B44]/30 dark:group-hover:bg-[#BC5B44]/40",
                "transition-colors duration-300 group"
              )}
            >
              <ArrowUpRight className="w-6 h-6 text-[#BC5B44] group-hover:-rotate-12 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 