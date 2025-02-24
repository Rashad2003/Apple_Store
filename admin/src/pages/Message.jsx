import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

export const Message = ({ token }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(backendUrl + "/api/contact/message", {
          headers: { token },
        });
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Contact Messages
      </h2>
      {messages.length === 0 ? (
        <p className="text-gray-600 text-center">No messages received.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-600 text-white">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-3 text-gray-800">{msg.username}</td>
                  <td className="p-3 text-gray-800">{msg.email}</td>
                  <td className="p-3 text-gray-700">{msg.message}</td>
                  <td className="p-3 text-gray-600">
                    {new Date(msg.date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
