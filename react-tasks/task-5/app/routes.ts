import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), 
    route("/about", "routes/about.tsx"), 
    route("/posts", "routes/posts.tsx"), 
    route("/posts/:postId", "routes/post.tsx")] satisfies RouteConfig;
