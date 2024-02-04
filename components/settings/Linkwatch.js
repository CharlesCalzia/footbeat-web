import React, { useEffect, useReducer, useState } from 'react';
import Button from "@mui/material/Button";
import { useAuth } from "../../src/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../src/firebase";

const LinkWatch = () => {
  const { user } = useAuth();
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tryterra.co/v2/auth/generateWidgetSession", {
          method: "POST",
          headers: {
            "dev-id": "thequackedcoders-prod-B5fwGbPPOx",
            "x-api-key": process.env.NEXT_PUBLIC_TERRA_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "reference_id": user.uid,
            "lang": "en",
            "auth_success_redirect_url": process.env.NEXT_PUBLIC_HOST_NAME + "/settings"
          })
        });

        const data = await response.json();
        const setLinkedWatch = async (status) => {
          await updateDoc(doc(db, "users", user.uid), {
              smartwatchLink: status,
          })
              .then(() => {
                  console.log("Document successfully updated!");
              })
              .catch((error) => {
                  console.error("Error updating document: ", error);
              });
        };

        await setLinkedWatch(true);

        setUrl(data.url);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mb-3">
      { url && <Button
          type="submit"
          fullWidth
          variant="contained"
          className="bg-primary"
          onClick={() => window.location = url}
      >
          Link smartwatch
      </Button> }
    </div>
  );
};

export default LinkWatch;
