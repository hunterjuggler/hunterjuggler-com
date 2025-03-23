
import { motion } from "@/lib/motion";
import BlurImage from "@/components/BlurImage";
import { Youtube, Heart, MessageCircle } from "lucide-react";

interface SocialPost {
  id: string;
  platform: "youtube";
  thumbnail: string;
  title: string;
  likes: number;
  comments: number;
  url: string;
}

interface SocialMediaFeedProps {
  posts: SocialPost[];
}

const SocialMediaFeed = ({ posts }: SocialMediaFeedProps) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <Youtube size={20} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          onClick={() => window.open(post.url, "_blank", "noopener,noreferrer")}
        >
          <div className="relative">
            <BlurImage
              src={post.thumbnail}
              alt={post.title}
              aspectRatio="video"
              className="w-full"
              noBg={true}
            />
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
              {getPlatformIcon(post.platform)}
              <span className="text-xs font-medium">YouTube</span>
            </div>
          </div>
          <div className="p-4">
            <p className="font-medium line-clamp-2 mb-2">{post.title}</p>
            <div className="flex justify-between text-sm text-foreground/70">
              <div className="flex items-center space-x-1">
                <Heart size={16} />
                <span>{post.likes >= 1000 ? `${(post.likes / 1000).toFixed(1)}K` : post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle size={16} />
                <span>{post.comments >= 1000 ? `${(post.comments / 1000).toFixed(1)}K` : post.comments}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaFeed;
