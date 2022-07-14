import NextLink from "next/link";
import classNames from "../util/classNames";
export const components = {
  h1: (props) => (
    <h1
      className={classNames(
        "text-4xl mt-8 text-neutral-800 font-medium",
        "dark:text-neutral-200"
      )}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className={classNames(
        "text-3xl text-neutral-800 mt-8 font-medium",
        "dark:text-neutral-200"
      )}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={classNames(
        "text-2xl text-neutral-800 mt-8 font-medium",
        "dark:text-neutral-200"
      )}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={classNames(
        "text-xl text-neutral-800 mt-8 font-medium",
        "dark:text-neutral-200"
      )}
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className={classNames(
        "text-lg text-neutral-800 mt-8 font-medium",
        "dark:text-neutral-200"
      )}
      {...props}
    />
  ),

  p: (props) => <p className={classNames("py-3 leading-relaxed")} {...props} />,

  blockquote: (props) => (
    <blockquote
      className={classNames(
        "bg-slate-100 dark:bg-neutral-700/25 border dark:border-neutral-700 rounded-lg px-5"
      )}
      {...props}
    />
  ),

  hr: (props) => (
    <hr
      {...props}
      className={classNames(
        "my-6 border-t-1 border-blue-500",
        "dark:border-orange-300"
      )}
    />
  ),
  ul: (props) => (
    <ul
      className={classNames("mb-6 list-disc list-inside sm:list-outside")}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className={classNames("mb-6 list-decimal list-inside sm:list-outside")}
      {...props}
    />
  ),
  li: (props) => (
    <li
      className={classNames(" text-slate-600 dark:text-slate-300 ")}
      {...props}
    />
  ),
  strong: (props) => <strong className={classNames("font-bold")} {...props} />,
  del: (props) => (
    <del
      className={classNames("border underline border-b-rose-500")}
      {...props}
    />
  ),
  table: (props) => (
    <table
      className={classNames(
        " rounded overflow-hidden w-full text-slate-600 my-4",
        " dark:text-slate-200"
      )}
      {...props}
    />
  ),
  th: (props) => (
    <th
      className={classNames(
        "bg-blue-500 text-white first:pl-4 shadow py-1 align-middle text-left",
        "dark:bg-blue-600/50"
      )}
      {...props}
    />
  ),
  td: (props) => (
    <td
      className={classNames("align-middle first:pl-4 py-2 text-left")}
      {...props}
    />
  ),
  tr: (props) => (
    <tr
      className={classNames(
        "even:bg-neutral-500/5",
        "dark:even:bg-neutral-500/5"
      )}
      {...props}
    />
  ),
  img: (props) => (
    <img className={classNames("rounded-xl", " shadow ")} {...props} />
  ),

  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classNames(
            "text-blue-600 hover:text-blue-700  border-b-2 border-opacity-0 hover:border-opacity-100 border-blue-500 transition-all hover:border-blue-500",
            "dark:text-blue-400 dark:hover:border-blue-500/50 cursor-ne-resize"
          )}
          target="_blank"
          rel="noopener"
          {...props}
        />
      );
    }

    return (
      <NextLink href={href} passHref>
        <a {...props} />
      </NextLink>
    );
  },
};
