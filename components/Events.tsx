import { Location } from "@/constants/svg";
import { client, urlFor } from "@/lib/sanity";
import { BlogArticle, EventInterface } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const revalidate = 30;
import { format } from "date-fns";

async function getData() {
  const query = `*[_type == 'event'] | order(_createdAt desc){
    title,
      description,
      "currentSlug": slug.current,
      "imageUrl": imageUrl.asset._ref,
      content,
      "dateTime": _createdAt,
      "updatedAt": _updatedAt,
      date,
      category,
      building,
      location,
      link,
      "categoryTitle":category.title,
      "authorName":author.name,
      "authorRole":author.role,
      "authorImageUrl": author.imageUrl.asset._ref,
  }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

const Events = async () => {
  const data = await getData();

  return (
    <section className="text-black font-DM  p-5 mx-auto px-6 lg:px-8">
      <article className="">
        <h2 className="text-white text-center text-3xl xsm:text-[40px] font-bold my-10 ">
          Events around the community
        </h2>
        <h4 className="text-[#b3b3b3fc] text-center text-base">
        The Community Hub is a vibrant platform designed to connect, engage, and empower users, developers, and enthusiasts. It serves as a central gathering place for sharing knowledge, collaborating on projects, and fostering meaningful interactions
        </h4>
      </article>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 ">
        {data.map((event: EventInterface) => (
          <Link
            href={`/event/${event.currentSlug}`}
            key={event.id}
            className="flex flex-col items-start justify-start bg-[#a5a5a518] rounded-2xl overflow-hidden"
          >
            <div className="relative w-full h-[300px] overflow-hidden object-contain">
              {event.imageUrl && (
                <Image
                  src={urlFor(event.imageUrl).url()}
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-full"
                />
              )}
            </div>
            <div className="w-full h-[1/2] p-5 flex flex-col justify-around">
              <div className=" flex items-center text-xs mb-2">
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {event.categoryTitle}
                </span>
              </div>
              <div className="group relative">
                <div className="flex items-center">
                  <span className="flex flex-col items-center m-2">
                    <h4 className="text-blue-400 font-semibold">{format(new Date(event.dateTime), "MMM")}</h4>
                    <h2 className="text-blue-700 text-4xl font-bold">{format(new Date(event.dateTime), "co")}</h2>
                  </span>
                  <span className="mt-3 ml-5 text-lg font-semibold text-white">
                    {event.title}
                  </span>
                </div>
                <div className="flex items-center m-2">
                  <Image src={Location} alt="" />
                  <div className="mx-2 ml-5">
                    <p className="mt-1 line-clamp-3 text-sm leading-6 text-gray-400">
                      {event.building}
                    </p>
                    <p className=" line-clamp-3 text-sm leading-6 text-gray-400">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Events;
