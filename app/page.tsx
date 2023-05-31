import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

export default function Home() {
  let posts = allPosts.sort(
    (
      a: { date: string | number | Date },
      b: { date: string | number | Date }
    ) => compareDesc(new Date(a.date), new Date(b.date))
  );

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const today = new Date().toLocaleDateString("en-US", options);
  const fromToday =
    format(parseISO(posts[0].date), "LLLL d, yyyy") !== today ? false : true;
  if (fromToday) {
    posts = posts.slice(1);
  }

  return (
    <main className="w-full ">
      <div className="container mx-auto px-3 py-10 flex flex-col">
        <h1 className="mb-8 text-center text-2xl font-black">
          What I have learned today...
        </h1>
        <p className="text-xs text-center ">{today}</p>
        <div className="mb-8">
          {!fromToday ? (
            <div className="mx-auto max-w-xl py-8 mb-8 text-center">
              Now is the perfect time to take a moment and refresh your memory
              on previously learned concepts.
            </div>
          ) : (
            <section className="mx-auto max-w-xl py-8 mb-8 post">
              <div className="text-3xl font-bold text-center my-3">
                {posts[0].title}
              </div>
              <div
                className="[&>*]:mb-3 [&>*:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: posts[0].body.html }}
              />
            </section>
          )}
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-xl py-8 mb-8">
          <h2 className=" text-center text-2xl font-black">
            What I have learned in the past...
          </h2>
          {posts.map((post: any, idx: any) => (
            <>
              <div key={idx} className="flex justify-between my-2 border-b">
                <h2 className="mb-1 text-xl">
                  <Link
                    href={post.url}
                    className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time dateTime={post.date} className="mb-2 flex text-xs mt-2">
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </div>
            </>
          ))}
        </div>
      </section>
    </main>
  );
}
