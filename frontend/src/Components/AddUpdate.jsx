import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true
const AddUpdate = () => {
  const [editorValue, setEditorValue] = useState('');
  const [topic, setTopic] = useState('');
  const [login, setLogin] = useState(null);
  const [msg, setMsg] = useState(null);

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    // Check admin authentication
    axios.get('https://api.legalbrother.in/api/protectedRoute')
      .then(res => {
        if (res.data.error !== "Unauthorized") {
          setLogin(true);
          setMsg(false);
        } else {
          setLogin(false);
          setMsg(res.data.error);
        }
      })
      .catch(err => {
        setLogin(false);
        setMsg(err.message);
      });
  }, 300);

  const navigate = useNavigate();
  const handleSubmit = () => {
    // Your API endpoint for saving the content
    const saveEndpoint = 'https://api.legalbrother.in/api/saveUpdate';

    if (topic === '' || !topic) {
      alert("Enter the Topic First...");
    } else {
      axios.post(saveEndpoint, {
        topic: topic,
        content: editorValue,
        date: currentDate,
        time: currentTime
      })
        .then(res => {
          alert("Post Uploaded...");
          navigate('/all-case-study');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className='min-vh-100 bg-white pt-5'>
      {msg && <center className='alert alert-danger'>{msg}, You are not Authorized for this page.</center>}
      {login && (
        <div className='container mt-4'>
          <center className='fs-2 fw-semibold'>Add new Update</center>
          <hr style={{ backgroundImage: "linear-gradient(to left, white,black,black,white)", height: "3px" }} />
          <div className='mb-3'>
            <label htmlFor='topic' className='form-label'>Topic</label>
            <input
              type='text'
              className='form-control'
              id='topic'
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className='mb-3 border p-2'>
            <label htmlFor='editor' className='form-label'>Content</label>
            <ReactQuill value={editorValue} onChange={setEditorValue} />
          </div>
          <button className='btn btn-primary mb-3 shadow' onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AddUpdate;
