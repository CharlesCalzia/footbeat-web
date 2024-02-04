// pages/api/data.js

export default async function handler(req, res) {
    const userID = process.env.NEXT_PUBLIC_USER_ID;
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
        const data = await response.json().then((data) => data.data[0]).then((data) =>
        { const JSONData = {
            "cals": Math.round(data.calories_data.total_burned_calories),
            "dist": Math.round(data.distance_data.distance_meters),
            "steps": Math.round(data.distance_data.steps),
            "mins": Math.round(data.active_durations_data.activity_seconds / 60),
          };
          return JSONData;
        })
        .then((data) => console.log(data));
        res.status(200).json(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Return a 500 error for error handling
      }
    } else {
      res.status(400).json({ error: "Bad Request", message: "Missing user ID" }); // Return a 400 error if no userID
    }
  }