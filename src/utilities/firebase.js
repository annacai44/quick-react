import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnarwhCeeoXOWHrjaMHngZAdJEXeETFOQ",
  authDomain: "quick-react-7c954.firebaseapp.com",
  projectId: "quick-react-7c954",
  storageBucket: "quick-react-7c954.appspot.com",
  messagingSenderId: "495481934199",
  appId: "1:495481934199:web:8f05cc49c08d52f1369172",
  measurementId: "G-DLH6PVN9WD",
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};
