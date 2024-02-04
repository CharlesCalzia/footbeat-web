import {
  PlusSmallIcon,
} from '@heroicons/react/20/solid'
import { useAuth } from '../../src/auth'
import React, { useEffect, useState, Fragment } from "react";
import { db } from "../../src/firebase";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import Router from "next/router";

const secondaryNavigation = [
  { name: 'Last 7 days', href: '#', current: true },
  { name: 'Last 30 days', href: '#', current: false },
  { name: 'All-time', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const { user } = useAuth();
  
    async function getUserID() {
      try {
        const q = query(
          collection(db, "/terra/" + process.env.NEXT_PUBLIC_DATE + "/user_events"),
          where("reference_id", "==", user.uid)
        );
  
        const querySnapshot = await getDocs(q);
  
        const userID = querySnapshot.docs[0].data().user.user_id; // Get the first userID
        return userID;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  
    async function getData(userID="720ae007-d2bc-4a24-99f7-792748e82c5b") {
      if (userID) {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'dev-id': 'thequackedcoders-prod-B5fwGbPPOx',
              'x-api-key': 'TbzvP8x0VPHIubRqneHhxeM0qlHcKT23'
            }
          };
  
        try {
          const response = await fetch(
            "https://api.tryterra.co/v2/activity?user_id=" +
              process.env.NEXT_PUBLIC_USER_ID +
              "&start_date=2024-01-28&end_date=2024-02-04&to_webhook=false&with_samples=true",
            options
          );
          const data = await response.json();
          return data.data; // Return the actual workout data
        } catch (error) {
          console.error("Error fetching data:", error);
          return []; // Return empty array for error handling
        }
      } else {
        return []; // Return empty array if no userID
      }
    }

    async function getDailyData(userID="720ae007-d2bc-4a24-99f7-792748e82c5b") {
      if (userID) {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'dev-id': 'thequackedcoders-prod-B5fwGbPPOx',
              'x-api-key': 'TbzvP8x0VPHIubRqneHhxeM0qlHcKT23'
            }
          };
  
        try {
          const response = await fetch(
            "https://api.tryterra.co/v2/daily?user_id=" +
              process.env.NEXT_PUBLIC_USER_ID +
              "&start_date=2024-01-28&end_date=2024-02-04&to_webhook=false&with_samples=false",
            options
          );
          const data = await response.json();
          return data.data; // Return the actual workout data
        } catch (error) {
          console.error("Error fetching data:", error);
          return []; // Return empty array for error handling
        }
      } else {
        return []; // Return empty array if no userID
      }
    }
  
    async function fetchDailyData() {
      if (!user) {
        Router.push("/signin");
        return []; // Return empty array if user is not signed in
      }
  
      const userID = await getUserID();
      return getDailyData(userID);
    }
  
    function DailySection() {
      const stats = [
        { name: 'Calories burnt', change: '+0.00%', changeType: 'positive' },
        { name: 'Steps', change: '0.00%', changeType: 'positive' },
        { name: 'Hrs of sleep', change: '0.00%', changeType: 'positive' },
        { name: 'Active minutes', change: '0.00%', changeType: 'positive' },
      ]
      const [daily, setDaily] = useState([]);
  
      useEffect(() => {
        const fetchDaily = async () => {
          try {
            const data = await fetchDailyData();
            console.log("Daily data...")
            console.log(data)
            setDaily(data);
          } catch (error) {
            console.error("Error fetching data:", error);
            setDaily([]);
          }
        };
  
        fetchDaily();
      }, []);      
  
      return (
        <>
          
        </>
      );
    }

    async function fetchData() {
      if (!user) {
        Router.push("/signin");
        return []; // Return empty array if user is not signed in
      }
  
      const userID = await getUserID();
      return getData(userID);
    }
  
    function Activities() {
      const [activities, setActivities] = useState([]);
  
      useEffect(() => {
        const fetchActivities = async () => {
          try {
            const data = await fetchData();
            
            setActivities(data);
          } catch (error) {
            console.error("Error fetching data:", error);
            setActivities([]);
          }
        };
  
        fetchActivities();
      }, []);

      const days = [
        {
          date: 'This week',
          dateTime: '2024-02-04',
          workouts: activities == null || activities == [] ? [] : activities,
        }
      ]      
  
      return (
        <>
        {days.map((day, index) => (
            <Fragment key={index}>
              <tr className="text-sm leading-6 text-gray-900">
                <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                  <time dateTime={day.dateTime}>{day.date}</time>
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50">Calories</>
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50">
                </th>
              </tr>
              { day.workouts == null ? null : (day.workouts.map((workout, index) => (
                <tr key={index}>
                  <td className="relative py-5 pr-6">
                    <div className="flex gap-x-6">
                      
                      <div className="flex-auto">
                        <div className="flex items-start gap-x-3">
                          <div className="text-sm font-medium leading-6 text-gray-900">
                          {workout.metadata.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                  </td>
                  <td className="hidden py-5 pr-6 sm:table-cell">
                    <div className="text-sm leading-6 text-gray-900">{Math.round(workout.calories_data.total_burned_calories)}</div>
                  </td>
                  <td className="py-5 text-right">
                    <div className="flex justify-end">
                      <a
                        href="https://google.com"
                        className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        View<span className="hidden sm:inline"> workout</span>
                      </a>
                    </div>
                  </td>
                </tr>
              )))}
            </Fragment>
          ))}
          </>
      );
    }
    

  return (
    <>
      <main>
        <div className="relative isolate overflow-hidden pt-16">
          {/* Secondary navigation */}
          <header className="pb-4 pt-6 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-gray-900">Overview</h1>
              <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
                {secondaryNavigation.map((item) => (
                  <a key={item.name} href={item.href} className={item.current ? 'text-indigo-600' : 'text-gray-700'}>
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
                Upload data
              </a>
            </div>
          </header>

          {/* Stats */}
          <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
              <DailySection />
            </dl>
          </div>

          <div
            className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
            aria-hidden="true"
          >
            <div
              className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
            />
          </div>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          {/* Recent workout table */}
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
                Recent workouts
              </h2>
            </div>
            <div className="mt-6 overflow-hidden border-t border-gray-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                  <table className="w-full text-left">
                    <tbody>
                      <Activities />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}