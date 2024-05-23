import React, { useState } from 'react';

const DiscussionSection = () => {
  const [discussionTopics, setDiscussionTopics] = useState([
    { id: 1, title: 'Question 1', content: 'I have a question about topic 1.' },
    { id: 2, title: 'Question 2', content: 'Can someone help me with topic 2?' },
  ]);
  const [newTopic, setNewTopic] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTopic({ ...newTopic, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTopic.title && newTopic.content) {
      const newDiscussionTopic = {
        id: discussionTopics.length + 1,
        title: newTopic.title,
        content: newTopic.content,
      };
      setDiscussionTopics([...discussionTopics, newDiscussionTopic]);
      setNewTopic({ title: '', content: '' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Discussion Section</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="title"
          value={newTopic.title}
          onChange={handleInputChange}
          placeholder="Enter title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="content"
          value={newTopic.content}
          onChange={handleInputChange}
          placeholder="Enter content"
          rows={4}
          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Post
        </button>
      </form>
      {discussionTopics.map((topic) => (
        <div key={topic.id} className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="font-semibold">{topic.title}</h3>
          <p>{topic.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscussionSection;
