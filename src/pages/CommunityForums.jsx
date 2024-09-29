import React, { useState } from 'react';

// Dummy data for forum threads and replies
const forumData = [
  {
    id: 1,
    title: "How to implement React Router?",
    content: "I'm struggling to implement React Router in my application. Can someone help?",
    replies: [
      { id: 1, user: "User A", content: "You can use 'react-router-dom' package.", upvotes: 3 },
      { id: 2, user: "User B", content: "Check the official documentation for examples.", upvotes: 5 },
    ],
  },
  {
    id: 2,
    title: "Best practices for state management in React",
    content: "What are the best practices for managing state in a React app?",
    replies: [],
  },
];

export default function CommunityForums() {
  const [threads, setThreads] = useState(forumData);
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadContent, setNewThreadContent] = useState("");
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [newReplyContent, setNewReplyContent] = useState("");

  const handlePostThread = () => {
    const newThread = {
      id: threads.length + 1,
      title: newThreadTitle,
      content: newThreadContent,
      replies: [],
    };
    setThreads([...threads, newThread]);
    setNewThreadTitle("");
    setNewThreadContent("");
  };

  const handlePostReply = (threadId) => {
    const updatedThreads = threads.map(thread => {
      if (thread.id === threadId) {
        const newReply = {
          id: thread.replies.length + 1,
          user: "Current User", // Replace with the actual user data
          content: newReplyContent,
          upvotes: 0,
        };
        return { ...thread, replies: [...thread.replies, newReply] };
      }
      return thread;
    });
    setThreads(updatedThreads);
    setNewReplyContent("");
    setSelectedThreadId(null);
  };

  const handleUpvoteReply = (threadId, replyId) => {
    const updatedThreads = threads.map(thread => {
      if (thread.id === threadId) {
        const updatedReplies = thread.replies.map(reply => {
          if (reply.id === replyId) {
            return { ...reply, upvotes: reply.upvotes + 1 };
          }
          return reply;
        });
        return { ...thread, replies: updatedReplies };
      }
      return thread;
    });
    setThreads(updatedThreads);
  };

  return (
    <div className="min-h-screen pt-24 px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <h1 className="text-3xl font-semibold text-center text-white mt-12 mb-6" 
      style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)'}}>Community Forums</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">Post a New Question</h2>
        <input
          type="text"
          placeholder="Thread Title"
          value={newThreadTitle}
          onChange={(e) => setNewThreadTitle(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-2"
        />
        <textarea
          placeholder="Thread Content"
          value={newThreadContent}
          onChange={(e) => setNewThreadContent(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <button
          onClick={handlePostThread}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Post Question
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-white mb-4">Active Threads</h2>
      {threads.map(thread => (
        <div key={thread.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <h3 className="text-xl font-medium mb-2">{thread.title}</h3>
          <p className="mb-2">{thread.content}</p>
          <div>
            <button
              onClick={() => {
                setSelectedThreadId(selectedThreadId === thread.id ? null : thread.id);
              }}
              className="text-blue-600 hover:underline"
            >
              {selectedThreadId === thread.id ? 'Hide Replies' : 'Show Replies'}
            </button>
          </div>

          {selectedThreadId === thread.id && (
            <div className="mt-4">
              <h4 className="text-lg font-medium mb-2">Replies:</h4>
              {thread.replies.length > 0 ? (
                thread.replies.map(reply => (
                  <div key={reply.id} className="flex justify-between items-center border-b pb-2 mb-2">
                    <p className="text-gray-600">{reply.user}: {reply.content}</p>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleUpvoteReply(thread.id, reply.id)}
                        className="text-yellow-500 hover:text-yellow-600 mr-2"
                      >
                        Upvote ({reply.upvotes})
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No replies yet.</p>
              )}
              <textarea
                placeholder="Write a reply..."
                value={newReplyContent}
                onChange={(e) => setNewReplyContent(e.target.value)}
                className="border border-gray-300 p-2 w-full mb-2"
              />
              <button
                onClick={() => handlePostReply(thread.id)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Reply
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
