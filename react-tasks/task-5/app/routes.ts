import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [route("/internship-homework/react-tasks/task-5", "routes/home.tsx"), 
    route("/internship-homework/react-tasks/task-5/about", "routes/about.tsx"), 
    route("/internship-homework/react-tasks/task-5/posts", "routes/posts.tsx"), 
    route("/internship-homework/react-tasks/task-5/posts/:postId", "routes/post.tsx")] satisfies RouteConfig;
