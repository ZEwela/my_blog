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
      <div className="container mx-auto px-2 py-12 flex flex-col">
        <h1 className="mb-8 text-center text-3xl font-black">
          What I have learned today...
        </h1>
        <p className="text-s text-center ">{today}</p>
        <div className="mb-8 ">
          {!fromToday ? (
            <div className="mx-auto max-w-2xl py-16 mb-8 text-center text-lg ">
              Now is the perfect time to take a moment and refresh your memory
              on previously learned concepts.
            </div>
          ) : (
            <section className="mx-auto max-w-2xl py-8 mb-8 post">
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
        <div className="mx-auto max-w-2xl pt-8 pb-16 mb-8">
          <h2 className=" text-center text-2xl font-black">
            What I have learned in the past...
          </h2>
          {posts.map((post: any, idx: any) => (
            <>
              <div className="flex justify-between my-4 border-b mx-1">
                <Link
                  key={idx}
                  href={post.url}
                  className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
                >
                  <h2 className="mb-1 text-xl">{post.title}</h2>
                </Link>

                <time dateTime={post.date} className="mb-2 flex text-s mt-2">
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
