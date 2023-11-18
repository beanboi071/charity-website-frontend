import React, { useEffect, useState } from 'react'
import { authHeader, baseUrl } from '../Common/endpoints';
import axios from 'axios';

export default function DonationHistoryTable() {
    const [donationHistory, setDonationHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [ngoName, setNgoName] = useState("");
  const [take, setTake] = useState(12);
  const [count, setCount] = useState(0);
  const getProjectRequests = async () => {
    await axios
      .get(
        `${baseUrl}Api/ProjectApi/GetPendingProjects?search=${search}&ngoName=${ngoName}&skip=${skip}&take=${take}`,
        { headers: { Authorization: authHeader } }
      )
      .then((res) => {
        setDonationHistory(res.data.data.list);
        setCount(res.data.data.count);
      });
  };
  useEffect(() => {
    getProjectRequests();
  }, [skip,take]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSkip(0);
      getProjectRequests();
    }
  };
  return (
    <div>

    </div>
  )
}
