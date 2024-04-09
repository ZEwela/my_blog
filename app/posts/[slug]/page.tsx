import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  try {
    const post = allPosts.find(
      (post) => post._raw.flattenedPath === params.slug
    );
    if (post) return { title: post.title };
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="mb-8 mx-2 ">
      <article className="py-8 mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className=" text-s">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-3xl pt-5 font-bold">{post.title}</h1>
        </div>
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0 post"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
      <div className="text-center">
        <Link
          className="text-lg bg-neutral-300 p-2 rounded-xl text-black hover:bg-neutral-400 "
          href="/"
        >
          Go back to main
        </Link>
      </div>
    </div>
  );
};

export default PostLayout;
