'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    const { topics } = await getTopics();
    setTopics(topics);
  };

  useEffect(() => {
    // Fetch topics initially
    fetchTopics();

    // Set up an interval to fetch topics every 5 seconds
    const intervalId = setInterval(fetchTopics, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt title="Edit Topic" size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

// import Link from 'next/link';
// import RemoveBtn from './RemoveBtn';
// import { HiPencilAlt } from 'react-icons/hi';

// const getTopics = async () => {
//   try {
//     const res = await fetch(
//       'http://localhost:3000/api/topics',
//       { cache: 'no-store' },
//       {
//         next: { revalidate: 1 },
//       }
//     );
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default async function TopicsList() {
//   const { topics } = await getTopics();

//   return (
//     <>
//       {topics.map((t) => (
//         <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
//           <div>
//             <h2 className="font-bold text-2xl">{t.title}</h2>
//             <div>{t.description}</div>
//           </div>

//           <div className="flex gap-2">
//             <RemoveBtn />
//             <Link href={`/editTopic/${t._id}`}>
//               <HiPencilAlt title="Edit Topic" size={24} />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
