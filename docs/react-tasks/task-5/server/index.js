import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "text-center text-3xl flex justify-center items-center h-screen flex-col max-w-7xl mx-auto",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-pink-600 bold ",
        children: " Welcome to the blog! In this app we gonna learn how to use react-router. This app has 3 pages:"
      }), /* @__PURE__ */ jsxs("ul", {
        children: [/* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("a", {
            href: "/about",
            className: "text-green-500 hover:underline",
            children: "About"
          }), " - In this section you can find information about me.. and some contacts too"]
        }), /* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("a", {
            href: "/posts",
            className: "text-purple-500 hover:underline",
            children: "Posts"
          }), " - This section has several posts to demonstrate how routing by id works"]
        }), /* @__PURE__ */ jsxs("li", {
          children: [/* @__PURE__ */ jsx("a", {
            href: "/",
            className: "text-blue-500 hover:underline",
            children: "Home"
          }), " - This is a home page, a page where you read this text. If you click the link, your page will be reloaded and you will see this text again."]
        })]
      })]
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const about = withComponentProps(function About() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-4xl font-bold mb-4",
      children: "About Me"
    }), /* @__PURE__ */ jsxs("p", {
      className: "text-lg text-center max-w-2xl",
      children: ["Hi there! I'm a passionate frontend developer who loves building web applications and exploring new technologies. Currently working as an intern at Endava", /* @__PURE__ */ jsx("span", {
        className: "inline-flex items-center",
        children: /* @__PURE__ */ jsx("a", {
          href: "https://www.endava.com/en",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ jsx("img", {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVxWEEeVSSDXiBSAPz_7vFbetvg8-eKAUMQ&s",
            className: "w-6 h-6 ml-2",
            alt: "Endava Logo"
          })
        })
      }), ",where I get to learn and grow in a dynamic environment.I enjoy solving complex problems and creating user-friendly experiences. In my free time, I like to read, learn, play games and contribute."]
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-6",
      children: /* @__PURE__ */ jsx("a", {
        href: "https://github.com/qStentyq",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
        children: "Check out my GitHub"
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-4",
      children: /* @__PURE__ */ jsx("a", {
        href: "/",
        className: "px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition",
        children: "Back to Home Page"
      })
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const posts = withComponentProps(function Posts() {
  return /* @__PURE__ */ jsxs("div", {
    className: "container mx-auto p-4",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-4xl font-bold text-center mb-8",
      children: "Posts"
    }), /* @__PURE__ */ jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      children: Array.from({
        length: 6
      }).map((_, index) => /* @__PURE__ */ jsxs("div", {
        className: "bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer",
        children: [/* @__PURE__ */ jsxs("h2", {
          className: "text-2xl font-semibold mb-2",
          children: ["Post Title ", index + 1]
        }), /* @__PURE__ */ jsx("p", {
          className: "text-gray-600",
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, lorem non tincidunt tincidunt, justo nisi facilisis erat, at tincidunt lorem nulla vel nisi..."
        }), /* @__PURE__ */ jsx("a", {
          href: `/posts/${index + 1}`,
          children: /* @__PURE__ */ jsx("button", {
            className: "mt-4 text-blue-500 hover:underline",
            children: "Read More"
          })
        })]
      }, index))
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-8 text-center",
      children: /* @__PURE__ */ jsx("a", {
        href: "/",
        className: "px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition",
        children: "Back to Home Page"
      })
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: posts
}, Symbol.toStringTag, { value: "Module" }));
async function loader({
  params
}) {
  const postId = params.postId;
  return {
    postId
  };
}
async function action({
  params
}) {
}
const post = withComponentProps(function Post({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("p", {
      children: [
        "Post id: ",
        //@ts-ignore
        loaderData.postId
      ]
    }), /* @__PURE__ */ jsx("button", {
      className: "mt-4 text-blue-500 hover:underline",
      children: /* @__PURE__ */ jsx("a", {
        href: "/posts",
        children: "Back to Posts"
      })
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: post,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/internship-homework/react-tasks/task-5/assets/entry.client-CrHes0rY.js", "imports": ["/internship-homework/react-tasks/task-5/assets/chunk-KNED5TY2-BWNdqSdz.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/internship-homework/react-tasks/task-5/assets/root-5cT7ZE-S.js", "imports": ["/internship-homework/react-tasks/task-5/assets/chunk-KNED5TY2-BWNdqSdz.js", "/internship-homework/react-tasks/task-5/assets/with-props-D3AO8slx.js"], "css": ["/internship-homework/react-tasks/task-5/assets/root-DSty4ymK.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/internship-homework/react-tasks/task-5/assets/home-BAQwZvgx.js", "imports": ["/internship-homework/react-tasks/task-5/assets/with-props-D3AO8slx.js", "/internship-homework/react-tasks/task-5/assets/chunk-KNED5TY2-BWNdqSdz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "/about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/internship-homework/react-tasks/task-5/assets/about-I4xstb68.js", "imports": ["/internship-homework/react-tasks/task-5/assets/with-props-D3AO8slx.js", "/internship-homework/react-tasks/task-5/assets/chunk-KNED5TY2-BWNdqSdz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "/posts", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/internship-homework/react-tasks/task-5/assets/posts-DIfXxXti.js", "imports": ["/internship-homework/react-tasks/task-5/assets/with-props-D3AO8slx.js", "/internship-homework/react-tasks/task-5/assets/chunk-KNED5TY2-BWNdqSdz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/post": { "id": "routes/post", "parentId": "root", "path": "/posts/:postId", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/internship-homework/react-tasks/task-5/assets/post-DPHU3nWb.js", "imports": ["/internship-homework/react-tasks/task-5/assets/with-props-D3AO8slx.js", "/internship-homework/react-tasks/task-5/assets/chunk-KNED5TY2-BWNdqSdz.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/internship-homework/react-tasks/task-5/assets/manifest-6f84caa2.js", "version": "6f84caa2", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/internship-homework/react-tasks/task-5/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "/about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "/posts",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/post": {
    id: "routes/post",
    parentId: "root",
    path: "/posts/:postId",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
