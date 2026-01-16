import { useEffect, useState } from "react";

const StudentTable = ({ refresh, onActionComplete }) => {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, [refresh]);

  const saveEdit = async (id) => {
    await fetch(`http://localhost:5000/api/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData)
    });

    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, ...editData } : s))
    );

    setEditId(null);
    onActionComplete();
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    await fetch(`http://localhost:5000/api/students/${id}`, {
      method: "DELETE"
    });

    setStudents(prev => prev.filter(s => s.id !== id));
    onActionComplete();
  };

  const activeStudents = students.filter(s => !s.isDeleted);

  if (!activeStudents.length) {
    return <p className="text-slate-500">No active students.</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100 text-left">
          <tr className="text-sm text-slate-600">
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {activeStudents.map(student => (
            <tr
              key={student.id}
              className="border-t hover:bg-slate-50 transition"
            >
              {/* NAME */}
              <td className="p-4">
                {editId === student.id ? (
                  <input
                    value={editData.name}
                    onChange={e =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  <span className="font-medium">{student.name}</span>
                )}
              </td>

              {/* EMAIL */}
              <td>
                {editId === student.id ? (
                  <input
                    value={editData.email}
                    onChange={e =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  student.email
                )}
              </td>

              {/* COURSE */}
              <td>
                {editId === student.id ? (
                  <input
                    value={editData.course}
                    onChange={e =>
                      setEditData({ ...editData, course: e.target.value })
                    }
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  student.course
                )}
              </td>

              {/* STATUS */}
              <td className="text-green-600 font-medium">Active</td>

              {/* ACTIONS */}
              <td className="p-4 flex gap-2">
                {editId === student.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(student.id)}
                      className="btn-primary"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditId(student.id);
                        setEditData({
                          name: student.name,
                          email: student.email,
                          course: student.course
                        });
                      }}
                      className="btn-secondary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
