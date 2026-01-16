import { useState } from 'react';

const AddStudentForm = ({ onStudentAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setFormData({ name: '', email: '', course: '' });
      onStudentAdded();
    } finally {
      setSaving(false);
    }
  };

 return (
  <form
    onSubmit={handleSubmit}
    className="bg-white rounded-2xl shadow-sm p-6 mb-10"
  >
    <h2 className="text-lg font-semibold mb-4 text-slate-700">
      Add Student
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div>
        <label className="label">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      <div>
        <label className="label">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      <div>
        <label className="label">Course</label>
        <input
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      <button
        disabled={saving}
        className="h-[42px] rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {saving ? 'Adding…' : 'Add Student'}
      </button>
    </div>
  </form>
);

};

export default AddStudentForm;
